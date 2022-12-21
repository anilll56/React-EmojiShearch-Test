import React from 'react'
import Header from './components/Header/Header';
import './App.css'
import EmojiShearchIntput from './components/EnojiShearchInput/EmojiShearchIntput';
import EmojiResult from './components/EmojiResult/EmojiResult';
import { useState } from 'react';

function App() {
  const [shearch , setShearch] = useState("");
  return (
    <div className="App"> 
      <div className='Content1'>
      <Header></Header>
      <EmojiShearchIntput shearch={shearch} setShearch={setShearch}></EmojiShearchIntput>
      <EmojiResult shearch={shearch} setShearch={setShearch}></EmojiResult>
      </div>
    </div>
  )
}

export default App;