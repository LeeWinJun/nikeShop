import { MongoClient } from "mongodb";


export async function connectToDatabasse() {
    const MONGODB_URL = process.env.MONGODB_URL;

    if (!MONGODB_URL) {
        throw new Error('MONGODB에 관한 환경 변수가 설정되어 있지 않습니다');
    }

    const client = new MongoClient(MONGODB_URL)
    return client.db();
}