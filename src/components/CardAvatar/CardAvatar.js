import "./CardAvatar.css";

function CardAvatar(props) {
  return (
    <div class="card-avatar">
      <div class="card-avatar__box">
        <img src={props.avatar} alt="avatar" class="card-avatar__img" />
      </div>
    </div>
  );
}

export default CardAvatar;
