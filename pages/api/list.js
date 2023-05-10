import { connectDB } from "@/util/database";

const List = async (req, res) => {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  if (req.method === "GET") {
    return res.status(200).json(result);
  }
};

export default List;
