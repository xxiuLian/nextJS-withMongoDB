import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const handler = async (req, res) => {
  console.log("dfsfasdfasdfsadfs", req);
  let session = await getServerSession(req, res, authOptions);
  console.log(session);

  if (session) {
    req.body.author = session.user.email;
  }

  //유저가 보낸 글 DB에 저장
  if (req.method == "POST") {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(req.body);
    return res.redirect(302, "/list");
  }
};

export default handler;
