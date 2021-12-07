import './Author.scss'

const Author = () => {
  return (
    <div className="author">
      <img src="/images/person.jpg" alt="author-img" className="author-image" />
      <h2 className="author-name">Dilorom Alieva</h2>
      <div className="buttons">
        <button className="follow-button" type="button">
          Follow
        </button>
        <button className="draft-button" type="button">
          <img src="/images/draft.svg" alt="draft-img" />
        </button>
      </div>
    </div>
  );
};

export default Author;
