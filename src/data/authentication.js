export const login = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const register = (email, password, username) => firebase.auth().createUserWithEmailAndPassword(email, password, username);