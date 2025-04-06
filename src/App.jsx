import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Todo from './components/Todo';
import Header from './components/header';
import "./app.css"

function App() {
  return (
    <div className="App">
     <Header />
     <Todo />
    </div>
  )
}

export default App;
