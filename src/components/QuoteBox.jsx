import "./styles/QuoteBox.css"

import React from 'react'

const QuoteBox = ({phrase,handleChangeQuote}) => {
  return (
    <section className="quoteBox">
    <button className="quoteBox__btn" onClick={handleChangeQuote}><span>PHRASE OF THE DAY</span></button>
    
    <article className="quoteBox__phare">
      <p className="phrase">{phrase}</p>
    </article>
    </section>
  )
}

export default QuoteBox