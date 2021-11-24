import "./CardData.css";

function CardData(props) {
  return (
    <div class="card-info__detail">
      <div class="card-info__detail-group">
        <p class="card-info__detail-label">{props.label1}</p>
        <p class="card-info__detail-data">{props.email}</p>
      </div>
      <div class="card-info__detail-group">
        <p class="card-info__detail-label">{props.label2}</p>
        <p class="card-info__detail-data">{props.mobile}</p>
      </div>
    </div>
  );
}

export default CardData;
