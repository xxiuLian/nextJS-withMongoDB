import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const Edit = async (props) => {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  // await db.collection('post').updateOne({수정할게시물정보}, {$set:{title:'바보'}})
  //   await db
  //     .collection("post")
  //     .updateOne({ _id: props.params.id }, { $set: { title: "바보" } });
  return (
    <div className="p-20">
      <h3>수정페이지</h3>
      <form action="/api/post/update" method="POST">
        <input name="id" defaultValue={result._id} className="displayIsNone" />
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <button type="submit">button</button>
      </form>
    </div>
  );
};

export default Edit;
