import "./Dates.scss";

const Dates = (props) => {
  return (
    <div className="dates">
      <span className="time">{props.time}</span>
      <span className="date">{props.date}</span>
      <span className="sign">|</span>
      <img src="/images/eye.svg" alt="eye" className="eye"/>
      <span className="view-count">{props.viewCount}</span>
    </div>
  );
};

export default Dates;
