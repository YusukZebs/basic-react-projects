import React, { useState } from 'react'
import './css/accordion.css'
import { accordionData, plusSign, minusSign } from './Accordion-data'

const Accordion = () => {

  return <div styleName="container">
    < main styleName = accordion">

      < header styleName = accordion__header
}>
  Questions And Answers About Login
      </header >
  <section styleName="cardContainer">
{
  accordionData.map(card =>
    <Card
      key={card.id}
      question={card.question}
      answer={card.answer}
    />
  )
}
  </section >
    </main >
  </div >
}


function Card(props) {
  const [cardOpened, setCardOpened] = useState(false)
  return <article styleName="card">
    <header styleName="card__header">
    < p styleName = card__question">{props.question}</p>

      < button
  onClick = {() => setCardOpened(cardOpened ? false : true)
}
styleName = card__button"
  >

{
  cardOpened
  ? minusSign

    : plusSign
}
      </button >
    </header >

  <p styleName="card__answer">{cardOpened && props.answer"</p >
  </article >
}

export default Accordion
