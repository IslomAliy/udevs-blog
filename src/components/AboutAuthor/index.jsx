import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container";
import styles from "./style.module.scss";
import Dates from "../Dates";
import { useState, useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import {db} from '../../firebase'
import {collection, getDocs} from '@firebase/firestore'

const AboutAuthor = () => {
    const [posts, setPosts] = useState([]);
    posts.splice(3);
    console.log('posts', posts)
    const postCollectionRef = collection(db, 'posts')

    useEffect(() => {
      getThreePosts();
    }, [])

    const getThreePosts = () => {
      getDocs(postCollectionRef).then((res) => {
        setPosts(res.docs.map(doc => ({...doc.data(), id: doc.id})))
        console.log(setPosts(res.docs.map(doc => ({...doc.data(), id: doc.id}))))
      }) 
    }
  return (
    <>
      <Header />
      <Container>
        <div className={styles.aboutAuthorWrapper}>
          <div className={styles.authorImageWrapper}>
            <img
              src="/images/kid.jpg"
              alt="author-img"
              className={styles.authorImage}
            />
          </div>
          <div className={styles.authorData}>
            <h1 className={styles.authorHeading}>Дилором Алиева</h1>
            <table className={styles.authorDataTable}>
              <tr>
                <td>Карьера</td>
                <td>Писатель</td>
              </tr>
              <tr>
                <td>Дата рождения</td>
                <td>2 ноября, 1974 ( 46 лет)</td>
              </tr>
              <tr>
                <td>Место рождения</td>
                <td>Черняховск, СССР (Россия)</td>
              </tr>
            </table>
          </div>
        </div>
        <div className={styles.postsWrapper}>
          <h1 className={styles.postsHeader}>ПУБЛИКАЦИИ</h1>

          {posts.map((item, id) => (
            <div className={styles.post} key={item.id}>
            <div className={styles.postImageWrapper}>
              <img
                src={item.image}
                alt="post-image"
                className={styles.postImage}
              />
            </div>
            <div className={styles.postData}>
              <h1 className={styles.postHeading}>
                {/* По инициативе Узбекистана создана Группа друзей по правам
                молодежи */}
                {item.title}
              </h1>
              <div className={styles.dates}>
                <Dates time="18:26" date="11.01.2021" viewCount="365" />
                <span className={styles.postCategory}>Права человека</span>
              </div>
              <p className={styles.postDescription}>
                {/* Посланник Генерального секретаря ООН по делам молодежи Джаятма
                Викраманаяке приняла участие в презентации созданной по
                инициативе Узбекистана Группе друзей по правам молодежи. В
                рамках этого международного проекта планируется продвижение прав
                молодых жителей планеты и расшире... */}
                {item.description}
              </p>
              <Link to={`/post/${item.id}`} className={styles.postButton}>Читать</Link>
            </div>
          </div>
          ))}
        
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AboutAuthor;
