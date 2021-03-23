import React, { useState } from "react";

import appData from './App-data'

import "./css/app.css"

const App = () => {
  const [CurrViewProject, setCurrViewProject] = useState(() => appData[0].component);

  function viewProject(id) {
    setCurrViewProject(prev => appData[id].component)
  }

  return <div styleName="container">
    <div styleName="buttonsContainer">

      {
        appData.map((project) =>
          <button
            key={project.id}
            onClick={
              () => viewProject(project.id)
            }
            styleName="button"
          >{project.name}</button>
        )
      }
    </div >

    <main styleName="projectContainer">

      <CurrViewProject />
    </main>
  </div >
};

export default App;
