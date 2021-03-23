import React, { useState } from "react";
import './css/reviews.css'
import reviewsData from './Reviews-data'

import quotationMarks from './media/right-quote-sign.png'
import arrowRight from './media/arrowRight.png'
import arrowLeft from './media/arrowLeft.png'

const Reviews = () => {
  const [currentReviewId, setCurrentReviewId] = useState(1);

  let { id, name, job, image, text } = reviewsData[currentReviewId - 1];

  function nextReviewer(idJump) {
    const maxId = reviewsData.length;

    setCurrentReviewId(prev => (
      (prev === 1 && idJump < 0)
        ? maxId
        : (prev === maxId && idJump > 0)
          ? 1
          : prev + idJump

    ))
  }

  function randomReviewer(id) {
    let randomId = id
    const maxId = reviewsData.length

    while (randomId === id) {
      randomId = Math.floor(Math.random() * (maxId)) + 1
    }

    setCurrentReviewId(prev => randomId)
  }

  return <div styleName="appContainer">
    <header styleName="header">
      < p styleName="header__text">Our Reviews</p>
      < div styleName="header__underline"></div>
    </header >
    <section styleName="card">
      < ReviewerInfo
        key={id}
        id={id}
        image={image}
        name={name}
        job={job.toUpperCase()}
        text={text}
      />

      <footer styleName="card__footer">
        < div styleName="card__arrowButtonContainer" >
          <input
            type="image"
            src={arrowLeft}
            alt=""
            styleName="card__arrowButton"
            onClick={() => nextReviewer(-1)}
          />

          <input
            type="image"
            src={arrowRight}
            alt=""
            styleName="card__arrowButton"
            onClick={() => nextReviewer(1)}
          />
        </div >

        <button styleName={() => randomReviewer(id)}>surprise me</button>
      </footer >
    </section >
  </div >
};

function ReviewerInfo(props) {
  return <article styleName="info" id={props.id}>
    <picture styleName="info__picture">
      <div styleName="info__imgDecorContainer" >
        <img src={quotationMarks} alt="" styleName="info__imgDecor" />
      </div >

      <img
        src={props.image}
        styleName="info__img"
        alt="Portrait of the reviewer"
      />
    </picture >

    <p styleName="info__name">{props.name}</p>
    <p styleName="info__job">{props.job}</p>
    <p styleName="info__text">{props.text}</p>
  </article>
}

export default Reviews;
