import { useState, useEffect } from "react";

import Container from "../Container";
import Header from "../Header";
import Footer from "../Footer";
import "./BlogSingle.scss";
import Dates from "../Dates";
import axios from "axios";
import { useParams } from "react-router";
import Author from "../Author";
import BestBlogs from "../BestBlogsCard";

const BlogSingle = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((data) => {
        setPost(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div>
      <Header />
      <Container>
        <div className="blog-single">
          <Author />
          <div className="body">
            <img src="/images/header.jpg" alt="header" className="header-img" />
            <div className="body-dates">
              <p className="photo-author-name">Фото: Dilorom Alieva</p>
              <Dates
                time="18:26"
                date="11.01.2021"
                viewCount="365"
                className="Dates"
              />
            </div>
            <div className="article">
              <h1 className="article-heading">{post.title}</h1>
              <p className="article-body">{post.body}</p>
            </div>
          </div>

          <div className="best-blog">
            <h1 className="best-blogs-heading">ЛУЧШИЕ БЛОГИ</h1>
            <BestBlogs />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default BlogSingle;
