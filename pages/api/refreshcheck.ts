import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function refreshCheck(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.MONGODB_URL) {
    return res.status(401).json({ message: "환경변수가 설정되어있지 않습니다." });
  }

  const client = new MongoClient(process.env.MONGODB_URL);
  try {
    await client.connect();
    const db = client.db();
    const tokenCollection = db.collection("signup");

    const now = new Date();
    const result = tokenCollection.deleteMany({ expiresAt: { $lt: now } });
    return res.status(200).json({ message: `유효기간이 지난 토큰 ${(await result).deletedCount}개가 삭제되었습니다.` });
    //데이터베이스에 유효기간이 지난 토큰이 있다면 그것을 삭제하면 되는 거잖아. 유효기간이 지난 토큰은 모두 삭제한다는 개념으로 접근하는 게 더 좋을 듯
  } catch (error: any) {
    console.log("error:", error.message);
    return res.status(500).json({ message: "서버에 오류가 발생했습니다." });
  } finally {
    await client.close();
  }
}
