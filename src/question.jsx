import React, { useState } from "react";
function Question(props) {
  const { id, title, info } = props;
  const [isOpened, setIsOpened] = useState(false);
  return (
    <li className="list__item">
      <div className="title__container">
        <h1 className="title">{title}</h1>
        <button onClick={() => setIsOpened(!isOpened)} className="btn">
          {isOpened ? "-" : "+"}
        </button>
      </div>
      {isOpened ? <p className="info">{info}</p> : ""}
    </li>
  );
}

export default Question;
