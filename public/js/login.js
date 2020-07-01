function uiConfig(){
    return{
        signInFlow: 'popup',
        signInSuccessUrl: '#',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID
          ]
    }
}

function logar(){
    var ui = firebaseui.auth.AuthUI.getInstance() ||  new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      signInFlow: 'popup',
      signInSuccessUrl: 'home.html'
    });
}

function removeLogin(){
    alert("Sucess");
}

function getUsuario(){
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("onAuthStateChanged")
        console.log(user.displayName)
          return user;
      }
  });
}

function isUsuarioLogado(){

  firebase.auth().onAuthStateChanged((user) => {
    if (user == null) {
        window.location.href = "index.html";
    }
});

}