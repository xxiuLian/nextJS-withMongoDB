import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const handler = async (req, res) => {
  //유저가 보낸 글 DB에 저장

  if (req.method == "POST") {
    const db = (await connectDB).db("forum");
    console.log("req", JSON.parse(req.body).author);
    const reqBody = JSON.parse(req.body);

    let session = await getServerSession(req, res, authOptions);
    console.log("req", req.body.author);
    console.log(session.user.email);
    if (session) {
      if (reqBody.author === session.user.email) {
        let result = await db
          .collection("post")
          .deleteOne({ _id: new ObjectId(reqBody._id) });
      } else {
        return res.redirect(404);
      }
    }

    return res.redirect(302, "/list");
  }
};

export default handler;
