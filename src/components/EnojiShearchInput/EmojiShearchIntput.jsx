import React from 'react'
import './ShearchInput.css'

function EmojiShearchIntput({setShearch}) {

  const onChange = (e) => {
    setShearch(e.target.value);
  }
  return (
    <div className='BigAlice'>
      <input className='inputCss' type='text'  onChange={onChange} placeholder='Search...' />
    </div>
  )
}

export default EmojiShearchIntput
