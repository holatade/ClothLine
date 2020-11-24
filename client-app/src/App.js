import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shop/shop.component";
import SIgnInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    //? method from auth library we get from firebase . componentDidMount occurrs when the
    //component mount and all functions in the meethid is invoked once, but because we use
    //auth.onAuthStateChanged, anytime the current user changes we know, cause
    //auth.onAuthStateChanged is an open subscription i.e open messaging system between our app
    // firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //? Note we not calling userRef.get() to get the snapshot, but we calling onSnapShot which works similarly
        // with auth.createUserProfileDocument
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            }
            // () => {
            //   console.log(this.state);
            // }
          );
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />{" "}
          <Route exact path="/shop" component={ShopPage} />{" "}
          <Route exact path="/signin" component={SIgnInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
