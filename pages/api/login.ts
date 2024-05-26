import jwt, { JwtPayload } from "jsonwebtoken";
import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function LoginHandler(req: NextApiRequest, res: NextApiResponse) {
  const accessSecret = process.env.ACCESS_SECRET;
  const refreshSecret = process.env.REFRESH_SECRET;

  if (!accessSecret) {
    throw new Error("ACCESS_SECRET 환경 변수가 설정되어 있지 않습니다.");
  }
  if (!refreshSecret) {
    throw new Error("REFRESH_SECRET 환경 변수가 설정되어 있지 않습니다.");
  }

  if (req.method === "POST") {
    try {
      if (!process.env.MONGODB_URL) {
        throw new Error("데이터 베이스 경로에 대한 환경 변수가 설정되어 있지 않습니다.");
      }

      const client = new MongoClient(process.env.MONGODB_URL);
      await client.connect();
      const db = client.db();
      const { id, pw } = req.body;
      const userList = db.collection("signup");
      const userInfo = await userList.findOne({ id });

      if (!userInfo) {
        res.status(403).json({ message: "일치하는 유저목록이 없습니다." });
        console.log("일치하는 회원 목록이 없습니다.");
      } else {
        if (pw !== userInfo.pw) {
          res.status(403).json({ message: "비밀번호가 일치하지 않습니다." });
          console.log("비밀번호가 일치하지 않습니다.");
        } else {
          try {
            //엑세스 토큰 발급
            const accessToken = jwt.sign(
              {
                id: userInfo.id,
                password: userInfo.pw,
                birth: userInfo.birth,
              },
              accessSecret,
              {
                expiresIn: "15m",
                issuer: "Nike",
              }
            );
            //리프레시 토큰 발급
            const refreshToken = jwt.sign(
              {
                id: userInfo.id,
                password: userInfo.pw,
                birth: userInfo.birth,
              },
              refreshSecret,
              {
                expiresIn: "6h",
                issuer: "Nike",
              }
            );

            // 리프레시 토큰은 데이터베이스에 저장
            await userList.updateOne({ id: userInfo.id }, { $set: { refreshToken: refreshToken, refreshTokenExpiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000) } });

            await userList.createIndex({ refreshTokenExpiresAt: 1 }, { expireAfterSeconds: 0 });

            //엑세스 토큰은 쿠키에 저장
            res.setHeader("Set-Cookie", `accessToken=${accessToken}; HttpOnly; Secure`);

            res.status(200).json({ message: "로그인 및 토큰 발급 성공" });
            console.log("토큰 발급 성공");
          } catch (error) {
            res.status(500).json({ message: error });
          }
        }
      }
      await client.close();
    } catch (error) {
      res.status(500).json({ message: "서버에 연결을 실패했습니다." });
      console.log("서버에 연결을 실패했습니다.");
    }
  } else {
    res.status(405).json({ message: "올바른 접근이 아닙니다." });
    console.log("올바른 접근이 아닙니다.");
  }
}
