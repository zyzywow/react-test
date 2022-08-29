export default function Item(props) {
  return (
    <li>
      <img src={props.imgSrc} alt="" />
      <div className="titleBox">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
      <div className="reservation">
        <dl>
          <dt>예약기간 </dt>
          <dd>{props.reservation}</dd>
        </dl>
        <dl>
          <dt>숙박기간 </dt>
          <dd>{props.days}</dd>
        </dl>
      </div>
    </li>
  );
}
