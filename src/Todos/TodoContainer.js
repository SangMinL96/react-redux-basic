import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { getPosts } from "../modules/postApi";

function TodoContainer() {
  const { data, loading, error } = useSelector((state) => state.postApi.posts);
  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  if (loading && !data) return <div>로딩중</div>;
  if (error) return <div>에러발생</div>;
  if (!data) return <div>데이터가 없습니다.</div>;

  return (
    <>
      {data?.data?.map((item) => (
        <div>
          <Link to={`/detail/${item.id}`} id={item.id} key={item.id}>
            {item.title}
          </Link>
        </div>
      ))}
    </>
  );
}

export default TodoContainer;
