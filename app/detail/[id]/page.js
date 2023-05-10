import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import Joa from "./Joa";

const Detail = async (props) => {
  console.log(props);
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(`${props.params.id}`) });

  let userId = await db
    .collection("user_cred")
    .findOne({ email: result.author });
  console.log("userID", userId);
  console.log("re", result);

  let count = await db
    .collection("joa")
    .count({ boardId: new ObjectId(result._id.toString()) });

  //누가조아요했는지 유저_.id ----userId._id
  //어떤글조아요했는지 글의_.id----result._id
  return (
    <div>
      <h2>상세페이지</h2>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Joa
        userId={userId._id.toString()}
        boardId={result._id.toString()}
        count={count}
      />
      <Comment id={result._id.toString()} />
    </div>
  );
};

export default Detail;
