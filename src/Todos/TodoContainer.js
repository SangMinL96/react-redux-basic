import React, { useCallback, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getPosts, getPost } from "../modules/postApi";

function TodoContainer() {
  const { data, loading, error } = useSelector((state) => state.postApi.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(21));
  }, [dispatch]);
  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러발생</div>;
  if (!data) return <div>데이터가 없습니다.</div>;

  return (
    <>
      <div>{data?.data.title}</div>
    </>
  );
}

export default TodoContainer;
