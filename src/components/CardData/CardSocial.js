import "./CardSocial.css";

function CardSocial(props) {
  return (
    <div class="card-info__social">
      <div class="card-info__social-box">
        <a href={props.twitter} className="links">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
      <div class="card-info__social-box">
        <a href={props.github} className="links">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div class="card-info__social-box">
        <a href={props.instagram} className="links">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default CardSocial;
