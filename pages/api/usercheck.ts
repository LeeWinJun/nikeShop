import jwt, { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import cookie from "cookie";
//로그인 유저 정보 조회

interface CustomJwtPayload extends JwtPayload {
  id: string;
}

export default async function userCheck(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "허용된 작업이 아닙니다." });
  }

  if (!process.env.MONGODB_URL || !process.env.JWT_SECRET) {
    return res.status(500).json({ messgae: "서버에 대한 설정이 올바르지 않습니다." });
  }
  if (process.env.JWT_SECRET !== "jwtsecret") {
    return res.status(500).json({ message: "토큰 발급의 키가 유효한 키가 아닙니다." });
  }
  const client = new MongoClient(process.env.MONGODB_URL);
  try {
    await client.connect();
    const db = client.db();
    const userList = db.collection("signup");
    const cookies = req.headers.cookie;

    if (!cookies) {
      return res.status(401).json({ message: "쿠키가 존재하지 않습니다." });
    }

    const parsedCookies = cookie.parse(cookies);
    const token = parsedCookies["accessToken"];
    console.log("토큰재료확인", token);

    try {
      const searchToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log("토큰확인", searchToken);
    } catch (error: any) {
      console.log("검증오류", error.message);
    }

    if (!token) {
      console.log("토큰이 존재하지 않습니다.");
      return res.status(401).json({ message: "토큰이 존재하지 않습니다." });
    }

    let verifyToken: CustomJwtPayload;
    try {
      verifyToken = jwt.verify(token, process.env.JWT_SECRET) as CustomJwtPayload;
      console.log("verifyToken", verifyToken);
    } catch (error: any) {
      if (error.name === "JsonWebTokenError") {
        console.log("유저확인 오류:", error.message);
        return res.status(401).json({ message: "토큰의 서명 및 형태가 변형되었습니다." });
      } else if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "토큰이 만료되었습니다." });
      } else {
        return res.status(500).json({ message: "토큰 검증 중 오류가 발생했습니다." });
      }
    }

    const user = await userList.findOne({ id: verifyToken.id });

    if (user) {
      return res.status(201).json({ id: user.id, pw: user.pw, birth: user.birth });
    } else {
      return res.status(404).json({ message: "토큰이 존재하지 않습니다." });
    }
  } catch (error: any) {
    console.log("오류메세지:", error.message);
    return res.status(500).json({ message: "서버에 오류가 발생했습니다." });
  } finally {
    await client.close();
  }
}
