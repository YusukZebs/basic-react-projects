import React, { useState, useEffect } from 'react'
import "./css/menu.css"
import menuData from "./Menu-data"

function Menu() {
  const [categoryData, setCategoryData] = useState(menuData);
  const [currCategory, setCurrCategory] = useState()

  useEffect(() => {
    setCurrCategory(document.getElementById("all"))
  }, [])

  function categoryButtonClick(category) {
    currCategory.classList.remove("navbar__button_clicked")
    if (category === undefined) {
      setCategoryData(prev => menuData);
      setCurrCategory(prev => document.getElementById("all"))
    }
    else {
      setCategoryData(prev => menuData.filter(item => item.category === category))
      setCurrCategory(prev => document.getElementById(`${category}`))
    }

    setCurrCategory(prev => { prev.classList.add("navbar__button_clicked"); return prev })
  }

  return (
    <div styleName="menu">
      <Header />
      <Navbar
        categoryButtonClick={categoryButtonClick}
        currCategory={currCategory}
        setCurrCategory={setCurrCategory}
      />

      <ItemList currView={categoryData} />

    </div >
  )
}

function Header() {
  return <header styleName="header">
    < h2 styleName=" header__text"
    > Our Menu</h2 >
    <div styleName="header__underline"></div>
  </header >
}

function Navbar(props) {
  let categories = []

  menuData.forEach((menu) => {
    const category = menu.category
    if (!categories.includes(category)) {
      categories.push(category)
    }
  })

  return <nav styleName="navbar">
    < button
      id="all"
      styleName="navbar__button navbar__button_clicked"
      onClick={() => props.categoryButtonClick()
      }
    > All</button >

    {
      categories.map(category => (
        <button
          key={category}
          id={category}
          styleName="navbar__button"
          onClick={() => (props.categoryButtonClick(category))}
        > { category}</button >
      ))
    }
  </nav >
}

function ItemList(props) {

  return (
    <main styleName="itemList">
      {
        props.currView.map(item => (
          <Item key={item.id} item={item} />
        ))
      }
    </main >
  )

  function Item({ item }) {

    return (

      <article styleName="item" >
        < img src={item.img} styleName="item__img" alt="" />

        < section styleName="item__section">
          < header styleName="item__header">
            < p styleName="item__title"> {item.title}</p >
            < p styleName="item__price"
            > ${item.price}</p >
          </header >
          <p styleName="item__desc">{item.desc}</p>
        </section >
      </article >
    )
  }

}
export default Menu
