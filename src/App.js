import { useContext } from "react";
import { UserContext } from ".";
function App1()
{
  const data=useContext(UserContext)
  return (
    <>
    <h1> {data.name} {data.age} </h1>
    </>
  )
}
export default App1