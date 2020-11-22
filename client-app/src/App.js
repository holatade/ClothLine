import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
