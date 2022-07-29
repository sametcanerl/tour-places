import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "../components/header/Header"
import Navbar from "../components/navbar/Navbar"
import Main from "../pages/main/Main"

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Header/>
    <Routes>
        <Route path="/" element={<Main/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter