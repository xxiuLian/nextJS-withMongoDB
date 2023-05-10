import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
  let session = await getServerSession(req, res, authOptions);
  if (req.method == "POST") {
    if (session) {
      req.body = JSON.parse(req.body);
      let commentList = {
        content: req.body.comment,
        parent: new ObjectId(req.body._id),
        author: session.user.email,
      };
      const db = (await connectDB).db("forum");
      let result = await db.collection("comment").insertOne(commentList);
      res.status(200).json("멀바");
    }
  }
};

export default handler;
