import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Unidades from "./pages/Unidades"
import Delivery from "./pages/Delivery"
import Contato from "./pages/Contato"
import ScrollToTop from './ScrollToTop';


function App(){
    return(
    <BrowserRouter basename='/theozzy'>
    <ScrollToTop>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/unidades' element={<Unidades/>}/>
            <Route path='/delivery' element={<Delivery/>}/>
            <Route path='/contato' element={<Contato/>}/>
        </Routes>
    </ScrollToTop>    
    </BrowserRouter>
    )
}

export default App;

