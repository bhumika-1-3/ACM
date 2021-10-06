import Navigationbar from "./components/Navigationbar"
import LayoutMain from "./components/LayoutMain";
import Card from "./components/card";
import 'bootstrap/dist/css/bootstrap.min.css';  
const App = () => {
    return (
        <div>
        <Navigationbar/>
        <LayoutMain/>
        <Card/>
        </div>
    )
}

export default App
