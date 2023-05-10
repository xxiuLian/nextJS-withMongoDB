import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
  //유저가 보낸 글 DB에 저장

  if (req.method == "POST") {
    const db = (await connectDB).db("forum");
    console.log(req);
    console.log(req.body);
    let result = await db.collection("post").updateOne(
      { _id: new ObjectId(req.body.id) },
      {
        $set: { title: req.body.title, content: req.body.content },
      }
    );
    return res.redirect(302, "/list");
  }
};

export default handler;
