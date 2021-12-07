import './BestBlogsCard.scss'
import Dates from '../Dates';

const BestBlogsCard = () => {
  return (
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
  );
};

export default BestBlogsCard;
