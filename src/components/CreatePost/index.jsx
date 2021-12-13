import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container";
import styles from "./CreatePost.module.scss";
import { useState } from "react/cjs/react.development";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const CreatePost = () => {
 

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const postCollectionRef = collection(db, "posts");

  const createPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(postCollectionRef, {
        title: title,
        image: image,
        description: description,
      });
      alert("Post successfully added");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className={styles.createPostWrapper}>
          <h1 className={styles.createPostHeader}>Настройки публикации</h1>
          <div className={styles.createPostInputs}>
            <div className={styles.createPostInputWrapper}>
              <label>Название</label>
              <input
                type="text"
                placeholder="Text input"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={styles.createPostInputWrapper}>
              <label>Изображение</label>
              <input
                type="text"
                placeholder="Image link"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className={styles.createPostInputWrapper}>
              <label>Описание</label>
              <input
                type="text"
                placeholder="Description"
                className={styles.descInput}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button className={styles.createPostBtn} onClick={createPost}>
              Send
            </button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default CreatePost;
