import Dates from "../Dates";
import "./BlogListItem.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogListItem = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {<p>Loading</p> &&
        posts.map((item, id) => (
          <Link
            to={`/post/${item.id}`}
            className="blog-list-item"
            key={id}
          >
            <img src="images/kid.jpg" alt="kid" className="item-image" />
            <Dates time="18:21" date="11.01.2021" viewCount="365" />
            <h1 className="item-heading">{item.title}</h1>
          </Link>
        ))}
    </>
  );
};

export default BlogListItem;
