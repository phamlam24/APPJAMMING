firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user);
      let userPlaceHolder = `
      <h5>Hi, ${user.displayName}</h5>
              <button
                id="logoutBtn"
                class="btn btn-primary ml-3"
                style="margin-left: 3em"
              >Log out</button>`
      $(".user-placeholder").html(userPlaceHolder)
      $("#logoutBtn").click(() => {
        firebase.auth().signOut().then(() => {
            window.location.href="./index.html";   
        })
        .catch((err) => {
            console.log(err.message);
        })
    })
    } else {
      // No user is signed in.
      console.log('die lol')
    }
  });
