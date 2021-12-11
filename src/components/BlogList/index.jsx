import BlogListItem from "../BlogListItem";
import Container from "../Container";
import "./BlogList.scss";

const BlogList = () => {
  return (
    <Container>
      <div className="blog-list">  
          <BlogListItem /> 
      </div>
    </Container>
  );
};

export default BlogList;
