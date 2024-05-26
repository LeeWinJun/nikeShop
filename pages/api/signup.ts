import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function SignupHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      if (!process.env.MONGODB_URL) {
        throw new Error("데이터 베이스 경로에 대한 환경 변수가 설정되어 있지 않습니다.");
      }
      const data = req.body;
      const client = new MongoClient(process.env.MONGODB_URL);
      await client.connect();
      const db = client.db();
      const collection = db.collection("signup");
      const result = await collection.insertOne(data);

      res.status(200).json({ message: "회원가입에 성공했습니다." });
      await client.close();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "회원가입에 실패했습니다." });
    }
  } else {
    res.status(405).json({ message: "올바른 접근이 아닙니다." });
  }
}
