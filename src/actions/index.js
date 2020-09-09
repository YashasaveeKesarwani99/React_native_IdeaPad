import firebase from "firebase";

export const autoInputChange = ({ field, value }) => {
  return {
    type: "AUTH_INPUT_CHANGE",
    payload: { field, value }
  };
};

export const login = ({ email, password }) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => dispatch({ type: "LOGIN_SUCCESS", payload: user }))
      .catch((error) => dispatch({ type: "LOGIN_FAILURE" }));
  };
};

export const ideaInputChange = ({ field, value }) => {
  return {
    type: "IDEA_INPUT_CHANGE",
    payload: { field, value }
  };
};

export const createIdea = ({ title, idea }) => {
  const { uid } = firebase.auth().currentUser;

  return (dispatch) => {
    firebase
      .database()
      .ref(`/userIdeas/${uid}/ideas`)
      .push({ title, idea })
      .then(() => dispatch({ type: "CREATE_IDEA" }));
  };
};
