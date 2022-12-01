export const login = (email, password) => firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((data) => { 
      return firebase.firestore().collection('users').doc(data.user.uid).get()
    })
    .then((doc) => doc.data())
    
export const register = (email, password, username) => firebase.auth().createUserWithEmailAndPassword(email, password, username);

// export const getDisplayName = () => firebase.auth().currentUser.email;

//export const getUserUid = () => firebase.auth().currentUser.uid;



