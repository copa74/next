import connectDB from "@/util/database";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(요청: any, 응답: any) {
  const session = await getServerSession(요청, 응답, authOptions);
  if (session) {
    요청.body.author = session?.user?.email;
  }

  if (요청.method == "POST") {
    if (요청.body.title == "") {
      return 응답.status(500).json("제목써라");
    }
    try {
      let db = (await connectDB).db("forum");
      let result = await db.collection("post").insertOne(요청.body);
      응답.redirect(200).redirect("/list");
      return 응답.status(200).json("ㅇㅅㅇ");
    } catch (error) {}
  }
}
