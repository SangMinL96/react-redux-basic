import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../modules/postApi";

function Detail({ match }) {
  const id = match.params.id;
  const { data, loading, error } = useSelector(
    (state) => state.postApi.post[id] || {}
  );
  const dispatch = useDispatch();
  console.log(match);
  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  if (loading && !data) return <div>로딩중</div>;
  if (error) return <div>에러발생</div>;
  if (!data) return <div>데이터가 없습니다.</div>;

  return <div>{data?.data.title}</div>;
}

export default Detail;
