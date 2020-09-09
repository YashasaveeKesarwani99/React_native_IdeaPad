import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import firebase from "firebase";
import {
  autoInputChange,
  login,
  ideaInputChange,
  createIdea
} from "./actions/index";
import { connect } from "react-redux";

class IdeaPad extends React.Component {
  componentDidMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAflDrArjZysSKtkUw7UTPXi0oZKrZPL_g",
      authDomain: "react-native-authenticat-ea34c.firebaseapp.com",
      databaseURL: "https://react-native-authenticat-ea34c.firebaseio.com",
      projectId: "react-native-authenticat-ea34c",
      storageBucket: "react-native-authenticat-ea34c.appspot.com",
      messagingSenderId: "660179138565",
      appId: "1:660179138565:web:a220c7f1027986218a846c",
      measurementId: "G-F1VBS7JYF6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  create() {
    const { title, idea } = this.props;

    this.props.createIdea({ title, idea });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input1}
          value={this.props.title}
          placeholder="Title"
          onChangeText={(text) =>
            this.props.ideaInputChange({ field: "title", value: text })
          }
        />
        <TextInput
          style={styles.input2}
          value={this.props.idea}
          placeholder="place your idea here"
          onChangeText={(text) =>
            this.props.ideaInputChange({ field: "idea", value: text })
          }
          multiline={true}
        />
        <Text style={styles.Text}>
          <Button title="Submit" onClick={this.create.bind(this)} />
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.ideapad.title,
    idea: state.ideapad.idea
  };
};

const styles = {
  container: {
    margin: 20,
    marginTop: 100
  },
  input1: {
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
    padding: 2,
    borderRadius: 5
  },
  input2: {
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    height: 200
  },
  Text: {
    marginLeft: 80
  }
};

export default connect(mapStateToProps, { ideaInputChange, login, createIdea })(
  IdeaPad
);
