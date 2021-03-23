import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './css/tab.css'

/**
function Tabs() {

  const [currViewData, setCurrViewData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  let data

  async function fetchData() {
    const res = await axios.get("https://course-api.com/react-tabs-project")

    data = res.data;
    setCurrViewData(prev => data[0])
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData();
    console.log("useEffect");
  }, [])


  return (
    <div styleName="tabs">
      {isLoading
        ? <IsLoadingText />
        : <div>
          <div styleName="company}>{currViewData.company}</div>
          <div styleName="dates">{currViewData.dates}</div>
          <div styleName="duties">{currViewData.duties}</div>
          <div styleName=id">{currViewData.id}</div>
          <div styleName="order">{currViewData.order"</div>
          <div styleName="title">{currViewData.title}</div>
        </div>
      }
    </div>
  )
}

function IsLoadingText() {
  return (
    <div styleName=isLoading">
      <p styleName=isLoading__text}>Loading...</p>
      <div styleName=isLoading__underline"></div>
    </div>
  )
}

function Title() {
  return (
    <div styleName="title">
      <p></p>
    </div>

  )
}
 */

function Tabs() {
  return (
    <div styleName="container"></div>
  )
}
export default Tabs