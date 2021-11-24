import "./CardAvatar.css";
import avatar from "./../../img/avatar.svg"

function CardAvatar() {
  return (
    <div class="card-avatar">
      <div class="card-avatar__box">
        <img src={avatar} alt="avatar" class="card-avatar__img" />
      </div>
    </div>
  );
}

export default CardAvatar;
