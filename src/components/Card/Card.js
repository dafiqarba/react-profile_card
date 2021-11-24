import CardAvatar from "../CardAvatar/CardAvatar";
import CardInfo from "../CardData/CardInfo";

import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <CardAvatar avatar={props.items[3].avatar} />
      <CardInfo items={props.items} />
    </div>
  );
}

export default Card;
