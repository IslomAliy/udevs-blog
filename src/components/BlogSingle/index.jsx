import { useState, useEffect } from "react";

import Container from "../Container";
import "./BlogSingle.scss";
import Dates from "../Dates";
import axios from "axios";
import { useParams } from "react-router";
import Author from "../Author";
import BestBlogsCard from "../BestBlogsCard";
import { db } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";

const BlogSingle = () => {
  const [post, setPost] = useState([]);
  console.log('post = ', post)
  const { id } = useParams();
  console.log("ID = ", id);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    getPostFromStore();
  }, []);

  // const getPost = () => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then(({data}) => {
  //       setPost(data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const getPostFromStore = () => {
    getDocs(postCollectionRef).then((res) => {
      setPost(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  return (
    <div>
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
              <p className="article-body">{post.description}</p>
            </div>
          </div>

          <div className="best-blog">
            <h1 className="best-blogs-heading">ЛУЧШИЕ БЛОГИ</h1>
            <BestBlogsCard />
            <BestBlogsCard />
            <BestBlogsCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogSingle;
