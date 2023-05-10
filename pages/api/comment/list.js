import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
  //--get방법
  // console.log(req.query.id)
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("comment")
    .find({ parent: new ObjectId(req.body) })
    .toArray();
  res.status(200).json(result);
};

export default handler;
