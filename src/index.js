/*
import reactDOM from 'react-dom/client'
import App1 from './App'
import { createContext } from 'react'
export const UserContext=createContext()
 const App = () => {
  console.log("Main Rendered")
  return (
    <>
    <UserContext.Provider value={{name:'mahesh',age:25}}> 
    <App1 />
    </UserContext.Provider>
    </>
  )
}
const container=reactDOM.createRoot(document.getElementById('root'))
container.render(<App />)
*/
import { useState } from "react";
import ReactDOM from "react-dom/client";
function App()
{
  const [value,setValue]=useState(0)
  return <>
  <button onClick={()=>setValue(value+1)}> {value} </button>
  </>
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)