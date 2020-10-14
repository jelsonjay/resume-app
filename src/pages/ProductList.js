import React from "react"
import SingleCard from "./SingleCard"

const ProductList = props => {
  return (
    <>
      <h1 className="txt">
        Most Popular JavaScript Frameworks & Libraries for Web Development
      </h1>
      <div className="btn">
        <button value="All" onClick={props.handleBtn}>
          All
        </button>
        <button value="javascript" onClick={props.handleBtn}>
          JavaScript
        </button>
        <button value="react" onClick={props.handleBtn}>
          React.js
        </button>
        <button value="vue" onClick={props.handleBtn}>
          Vue.js
        </button>
        <button value="gatsby" onClick={props.handleBtn}>
          Gatsby.js
        </button>

        {/*This is in Dynamic*/}
      </div>
      <div className="product">
        {props.products.map(item => {
          return <SingleCard key={item.id} item={item} />
        })}
      </div>
    </>
  )
}

export default ProductList
