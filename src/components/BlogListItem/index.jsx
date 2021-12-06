import "./BlogListItem.scss";

const blogItemData = [
  {
    image: "images/cigarette.jpg",
    time: "18;26",
    date: "11.01.2021",
    viewCount: "365",
    title:
      "ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....",
    id: 1,
  },
  {
    image: "images/kid.jpg",
    time: "18;26",
    date: "11.01.2021",
    viewCount: "365",
    title:
      "ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....",
    id: 2,
  },
  {
    image: "images/cigarette.jpg",
    time: "18;26",
    date: "11.01.2021",
    viewCount: "365",
    title:
      "ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....",
    id: 3,
  },
  {
    image: "images/kid.jpg",
    time: "18;26",
    date: "11.01.2021",
    viewCount: "365",
    title:
      "ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....",
    id: 4,
  },
  {
    image: "images/cigarette.jpg",
    time: "18;26",
    date: "11.01.2021",
    viewCount: "365",
    title:
      "ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....",
    id: 5,
  },
  {
    image: "images/kid.jpg",
    time: "18;26",
    date: "11.01.2021",
    viewCount: "365",
    title:
      "ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....",
    id: 6,
  },
  {
    image: "images/cigarette.jpg",
    time: "18;26",
    date: "11.01.2021",
    viewCount: "365",
    title:
      "ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....",
    id: 7,
  },
  {
    image: "images/kid.jpg",
    time: "18;26",
    date: "11.01.2021",
    viewCount: "365",
    title:
      "ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....",
    id: 8,
  },
  {
    image: "images/cigarette.jpg",
    time: "18;26",
    date: "11.01.2021",
    viewCount: "365",
    title:
      "ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....",
    id: 9,
  },
  {
    image: "images/kid.jpg",
    time: "18;26",
    date: "11.01.2021",
    viewCount: "365",
    title:
      "ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....",
    id: 10,
  },
  {
    image: "images/cigarette.jpg",
    time: "18;26",
    date: "11.01.2021",
    viewCount: "365",
    title:
      "ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....",
    id: 11,
  },
  {
    image: "images/kid.jpg",
    time: "18;26",
    date: "11.01.2021",
    viewCount: "365",
    title:
      "ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....",
    id: 12,
  },
];

const BlogListItem = () => {
  return (
    <>
      {blogItemData.map((item) => (
        <div className="blog-list-item" key={item.id}>
          <img src={item.image} alt="cigarette" className="item-image" />
          <div className="dates">
            <span className="time">{item.time}</span>
            <span className="date">{item.date}</span>
            <span className="sign">|</span>
            <span className="view-count">{item.viewCount}</span>
          </div>
          <h1 className="item-heading">
            {item.title}
          </h1>
        </div>
      ))}
    </>
  );
};

export default BlogListItem;
