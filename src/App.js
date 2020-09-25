import React from 'react';
import './App.css';

import { AuthProvider } from "./Firebase/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  const store = createStore(reducers, applyMiddleware(thunk));
  return (
      <Provider store={store}>
          <AuthProvider>
              <Router>
                  <div className="App">
                  <Nav />
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route
                          path="*"
                          render={() => (
                              <div>
                                  <h1>404 Error</h1>
                                  <p>
                                      The page you've requested could not be found. The
                                      resource may have been deleted.
                                  </p>
                              </div>
                          )}
                      />
                  </Switch>
                  </div>
              </Router>
          </AuthProvider>
      </Provider>
  );
}

export default App;
