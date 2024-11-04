import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [localUser, setLocalUser] = useState(null); // Local state to track user

  useEffect(() => {
    // will only run once when the app component loads...

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      // Check if the user has changed
      if (authUser) {
        // User is logged in
        setLocalUser(authUser); // Update local state
      } else {
        // User is logged out
        setLocalUser(null); // Update local state
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []); // Dependency array empty to run only on mount

  useEffect(() => {
    // Dispatch only if localUser has changed
    if (localUser !== user) {
      dispatch({
        type: "SET_USER",
        user: localUser,
      });
    }
  }, [localUser, user, dispatch]); // Only run when localUser changes

  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
