import React from 'react'
import './Result.css'
import items from "../Data/EmojiList"
const item=items;

function EmojiResult({ shearch}) {
  function copyName(name) {
    navigator.clipboard.writeText(name);
  }
  return (
    <div className='ResultPage'>
        <div className='ResultEmoji'>
          {
            item.filter((item) => {
              return item.title.includes(shearch)
            }).map((item) => {
              return (
                <div onClick={()=>copyName(item.title)} key={item.keywords}>
                  <div className='Emoji'>
                    <div>{item.symbol}</div>
                    <div>{item.title}</div>
                    <div className='RightSide'>Click to Copy</div>
                  </div>
                </div>
              )
            })
          }
        </div>


    </div>
  )
}

export default EmojiResult;
