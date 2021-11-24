import "./CardInfo.css";

import CardID from "./CardID";
import CardData from "./CardData";
import CardSocial from "./CardSocial";

function CardInfo(props) {
  return (
    <div class="card-info">
      <CardID name={props.detail.name} batch={props.detail.batch} />

      <div class="card-info__detail-box">
        <CardData
          email={props.detail.email}
          mobile={props.detail.mobile}
          label1={props.detail.label1}
          label2={props.detail.label2}
        />
        <CardData
          email={props.detail.education}
          mobile={props.detail.skills}
          label1={props.detail.label3}
          label2={props.detail.label4}
        />
      </div>
      <CardSocial
        twitter={props.detail.twitter}
        github={props.detail.github}
        instagram={props.detail.instagram}
      />
    </div>
  );
}

export default CardInfo;
