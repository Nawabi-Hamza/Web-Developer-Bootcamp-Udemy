import './App.css'
import CssBaseLine from "@mui/material/CssBaseline"
import TodoList from './TodoList'
import { Box } from '@mui/material'
import Navbar from './Navbar'

function App() {

  return (
    <>
      <CssBaseLine />
      <Navbar />
      <TodoList />
    </>
  )
}

export default App


// [
//   {id:12, text:"walk the dog", completed:false}
// ]