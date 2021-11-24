import CardAvatar from "../CardAvatar/CardAvatar";
import CardInfo from "../CardData/CardInfo";

import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <CardAvatar image={props.detail.avatar} />
      <CardInfo detail={props.detail} />
    </div>
  );
}

export default Card;
