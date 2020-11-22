import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div className="">
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
