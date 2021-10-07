import Navigationbar from "./components/Navigationbar"
import LayoutMain from "./components/LayoutMain";
import '../src/App.css'
import Card from "./components/card";
import { HiChat } from 'react-icons/hi'
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
    return (
        <div>
            <Navigationbar />
            <LayoutMain />
            <button className='chat' ><HiChat style={{ transform: 'translateY(-2px)' }} /></button>
            <Card />
            <Footer />
        </div>
    )
}

export default App
