import connectDB from "../../src/util/database";

export default async function handler(요청: any, 응답: any) {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").find().toArray();

  if (요청.method === "GET") {
    return 응답.status(200).json(result);
  }
}

// 1. /api/list get 요청시 DB에 있던 post 컬렉션의 모든 데이터 보내주기
// 2. 현재 시간 보내주는 서버기능 만들어오기
// 3. 글발행기능 완성해오기
