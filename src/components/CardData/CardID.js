import "./CardID.css";

function CardID(props) {
  return (
    <div class="card-info__id-box">
      <h1 class="card-info__id-group">
        <span class="card-info__id-name">{props.name}</span>
        <span class="card-info__id-batch">{props.batch}</span>
      </h1>
    </div>
  );
}

export default CardID;
