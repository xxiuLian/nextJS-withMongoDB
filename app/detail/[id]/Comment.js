"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Comment = (props) => {
  const router = useRouter();
  let [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const onReset = () => {
    setComment("");
  };

  //client component에선 DB를 바로 가져올 수 없고 서버에 요청해야함
  useEffect(() => {
    fetch("/api/comment/list", {
      method: "POST",
      body: props.id,
    })
      //--get방법 query parameter, query string 두가지 방법
      // fetch(`/api/comment/list?id=${props.id}`)
      .then((res) => res.json())
      .then((data) => setCommentList(data));
  }, []); //,[] html로드 시 1회만 실행할때
  //useEffect 특징
  //html 보여준 후 늦게 실행 시작
  console.log(commentList);
  return (
    <div>
      <hr />
      {commentList.length > 0
        ? commentList.map((data, i) => {
            return (
              <div key={i}>
                <span>{data.content}</span>&nbsp;&nbsp;
                <span>{data.author}</span>
              </div>
            );
          })
        : "댓글 없음"}

      <input
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      {
        <button
          onClick={() => {
            fetch("/api/comment/new", {
              method: "POST",
              //object나 array로 전송할때
              body: JSON.stringify({ comment: comment, _id: props.id }),
            });
            router.refresh();
            onReset();
          }}
        >
          댓 전송
        </button>
      }
    </div>
  );
};
export default Comment;
