import { useState, useEffect } from "react";

import Container from "../Container";
import Header from "../Header";
import Footer from "../Footer";
import "./BlogSingle.scss";
import Dates from "../Dates";
import axios from "axios";
import { useParams } from "react-router";


const BlogSingle = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(data => {
        setPost(data)
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
  })

  return (
    <div>
      <Header />
      <Container>
        <div className="blog-single">
          <div className="author">
            <img src="/images/person.jpg" alt="author-img" className="author-image"/>
            <h2 className="author-name">Dilorom Alieva</h2>
            <div className="buttons">
              <button className="follow-button" type="button">Follow</button>
              <button className="draft-button" type="button">
                {" "}
                <img src="/images/draft.svg" alt="draft-img" />
              </button>
            </div>
          </div>
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
              <h1 className="article-heading">
                {post.title}
              </h1>
              <p className="article-body">
                {post.body}
              </p>
            </div>
          </div>
          <div className="best-blog">
            <h1 className="best-blogs-heading">ЛУЧШИЕ БЛОГИ</h1>
            <div className="blogs-card">
              <img
                src="/images/best-blogs.svg"
                alt="blogs-img"
                className="best-blogs-img"
              />
              <div className="heading-and-date">
                <h2 className="blogs-heading">
                  ВОЗ: молодые жители Европы стали меньше курить
                </h2>
                <Dates time="18:26" date="11.01.2021" viewCount="365" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default BlogSingle;
