"use client";

import { useRouter } from "next/navigation";

const DetailLink = async (props) => {
  const router = useRouter();
  const url = props.props;

  return (
    <button
      onClick={() => {
        router.push(`/detail/${url}`);
      }}
    >
      버튼
    </button>
  );
};

export default DetailLink;
