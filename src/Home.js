import { useEffect, useState } from "react";
import BlogList from "./Bloglist";
import useFetch from "./useFetch";

//to start json server
//npx json-server --watch data/db.json --port 8000

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
