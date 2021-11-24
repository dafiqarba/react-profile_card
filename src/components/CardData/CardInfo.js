import "./CardInfo.css";

import CardID from "./CardID";
import CardData from "./CardData";
import CardSocial from "./CardSocial";

function CardInfo(props) {
  return (
    <div class="card-info">
      <CardID name={props.items[0].name} batch={props.items[0].batch}></CardID>

      <div class="card-info__detail-box">
        <CardData
          email={props.items[0].email}
          mobile={props.items[0].mobile}
          label1={props.items[1].label1}
          label2={props.items[1].label2}
        />
        <CardData
          email={props.items[0].education}
          mobile={props.items[0].skills}
          label1={props.items[1].label3}
          label2={props.items[1].label4}
        />
      </div>
      <CardSocial twitter={props.items[2].twitter} github={props.items[2].github} instagram={props.items[2].instagram}/>
    </div>
  );
}

export default CardInfo;
