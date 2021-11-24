import CardAvatar from "../CardAvatar/CardAvatar";
import CardInfo from "../CardData/CardInfo";

import "./Card.css";

function Card(props) {
  return (
    <div className="container">
      <div className="card">
        <CardAvatar/>
        <CardInfo items={props.items} />
      </div>
    </div>
  );
}

export default Card;
