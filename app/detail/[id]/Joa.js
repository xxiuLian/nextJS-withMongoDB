"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const Joa = (props) => {
  const router = useRouter();
  const [joa, setJoa] = useState(0);

  console.log("joa에서", props);

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <span>{props.count}</span>
      <button
        onClick={() => {
          fetch("/api/joa/new", {
            method: "POST",
            body: JSON.stringify({
              userId: props.userId,
              boardId: props.boardId,
            }),
          })
            .then((res) => res.json())
            .then((data) => setJoa(data));

          router.refresh();
        }}
      >
        조아용~
      </button>
    </div>
  );
};

export default Joa;
