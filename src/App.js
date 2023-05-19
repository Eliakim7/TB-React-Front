import './utils/sass/index.scss';
import {Route, Routes} from "react-router-dom"
import Template from './components/template/index'
import Home from "./pages/pageHome/index"
import Burgers from './pages/pageBurgers/burgers';
import Accompagnements from './pages/pageAccompagnements/accompagnements';
import Boissons from './pages/pageBoissons/boissons';
import Desserts from './pages/pageDesserts/desserts';
import Clickandcollect from './pages/pageCC/clickandcollect';
import Panier from './pages/pagePanier/panier';
import BoissonDS from './pages/dashboard/boisson'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Home/>} />
          <Route path="/clickandcollect" element={<Clickandcollect/>} />
          <Route path="/burgers" element={<Burgers/>} />
          <Route path="/accompagnements" element={<Accompagnements/>} />
          <Route path="/boissons" element={<Boissons/>} />
          <Route path="/desserts" element={<Desserts/>} />
          <Route path="/panier" element={<Panier/>} />
          <Route path="/admin/boisson" element={<BoissonDS/>} />
        </Route>
      </Routes>
    </>
    
);
}

export default App;
