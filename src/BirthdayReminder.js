import React, { useState } from 'react'
import './css/birthdayReminder.css'
import bdayReminderData from './BirthdayReminder-data'

const BirthdayReminder = () => {
  const [people, setPeople] = useState(bdayReminderData);

  function clearAll() {
    setPeople((prev) => []);
  }

  return <div styleName="container">

    < main styleName="blockDisplay"
    >
      <header styleName="header">
        {people.length} birthdays today
      </header >
      {
        people.map((person) => (
          <div key={person.id} styleName="personBlock" >
            <img src={`${person.image}`} alt="" styleName="personBlock__image" />

            < span styleName="personBlock__text">
              < h3 styleName="personBlock__name">{person.name}</h3>
              < h5 styleName="personBlock__age">{person.age} years</h5>
            </span >
          </div >
        ))
      }

      <div styleName="btnContainer">
        < button styleName="button" onClick={clearAll} >
          Clear All
    </button >
      </div >
    </main >
  </div >
};

export default BirthdayReminder
