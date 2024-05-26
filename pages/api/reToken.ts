import { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";
import { MongoClient } from "mongodb";

//토큰 재발급
interface CustumJwtPayload extends JwtPayload {
  id: string;
}
//로그인, 장바구니 및 결제가 필요한 페이지, 토큰 재발급 코드를 구현
export default async function ReToken(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "해당 작업은 허용된 작업이 아닙니다." });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(401).json({ message: "유효한 토큰이 존재하지 않습니다. 인증을 다시 시도하세요." });
  }

  if (!process.env.MONGODB_URL || !process.env.JWT_SECRET || !process.env.ACCESS_SECRET) {
    return res.status(500).json({ messgae: "서버에 대한 설정이 올바르지 않습니다." });
  }

  let decodedToken: CustumJwtPayload;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET) as CustumJwtPayload;
  } catch (error) {
    return res.status(401).json({ message: "토큰이 만료되었거나 유효하지 않습니다." });
  }

  const client = new MongoClient(process.env.MONGODB_URL);
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection("signup");
    const user = await collection.findOne({ id: decodedToken.id });
    if (!user) {
      await client.close();
      return res.status(404).json({ message: "유저 정보가 존재하지 않습니다." });
    }
    const refreshToken = user.refreshToken;
    if (!refreshToken) {
      await client.close();
      return res.status(401).json({ message: "리프레시 토큰이 존재하지 않습니다." });
    }
    const reAccessToken = jwt.sign({ id: decodedToken.id }, process.env.ACCESS_SECRET, { expiresIn: "15m", issuer: "Nike" });
    await client.close();
    return res.status(200).json({ reAccessToken });
  } catch (error: any) {
    return res.status(500).json({ message: "서버에 오류가 발생했습니다.", error: error.message });
  } finally {
    await client.close();
  }
}
