import Dates from "../Dates";
import "./BlogListItem.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {db} from '../../firebase'
import {collection, getDocs} from '@firebase/firestore'

const BlogListItem = () => {
  const [posts, setPosts] = useState([]);
  const postCollectionRef = collection(db, 'posts')

  useEffect(() => {
    getPostsFromStore();
  }, []);

  // const getPosts = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then(({ data }) => {
  //       data.splice(12)
  //       setPosts(data);
  //     })
  //     .catch((error) => {
  //       console.error(error); 
  //     });
  // };

  const getPostsFromStore = () => {
    getDocs(postCollectionRef).then((res) => {
      setPosts(res.docs.map(doc => ({...doc.data(), id: doc.id})))
      console.log(res.docs.map(doc => ({...doc.data(), id: doc.id})))
    })
  }

  return (
    <>
      {<p>Loading</p> &&
        posts.map((item, id) => (
          <Link 
            to={`/post/${item.id}`}
            className="blog-list-item"
            key={id}
          >
            <img src={item.image} alt="blog-image" className="item-image" />
            <Dates time="18:21" date="11.01.2021" viewCount="365" />
            <h1 className="item-heading">{item.title}</h1>
          </Link>
        ))}
    </>
  );
};

export default BlogListItem;
