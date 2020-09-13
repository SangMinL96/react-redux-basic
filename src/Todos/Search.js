import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getSearch } from "../modules/postApi";
import { useInput } from "../useInput";

function Search() {
  const { data, loading, error } = useSelector((state) => state.postApi.search);
  const dispatch = useDispatch();

  const textValue = useInput("");
  console.log(data);
  console.log(textValue);
  useEffect(() => {
    dispatch(getSearch(textValue));
  }, [dispatch]);
  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러발생</div>;
  if (!data) return <div>데이터가 없습니다.</div>;

  return (
    <div>
      <input value={textValue.value} onChange={textValue.onChange} />
      {data?.data?.results?.map((item) => <div> {item.title}</div>)}
    </div>
  );
}

export default Search;
