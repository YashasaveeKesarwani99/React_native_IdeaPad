import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Login from "./login";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import ReduxThunk from 'redux-thunk';

class App extends Component {
  render() {
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <Login />
        </View>
      </Provider>
    );
  }
}
export default App;
