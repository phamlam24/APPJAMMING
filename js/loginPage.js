function objectifyForm(formArray) {
    //serialize data function
    let returnArray = {};
    for (var i = 0; i < formArray.length; i++){
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}
$("#sign-in-form").submit(function(e) {
    e.preventDefault();
    let signInUser = objectifyForm($("#sign-in-form").serializeArray());
    // console.log(ser);
    firebase.auth().signInWithEmailAndPassword(signInUser.loginName, signInUser.loginPass)
        .then((userCredentials) => {
            window.location.href = "./index.html"
        })
        .catch((error) => {
            alert(error.message);
        })
});
$("#sign-up-form").submit(function(e) {
    e.preventDefault();
    // var user = {
    //     registerName: "",
    //     registerUsername: "",
    //     registerEmail: "",
    //     registerPassword: "",
    //     registerRepeatPassword: "",
    // }
    var user = objectifyForm($("#sign-up-form").serializeArray());
    console.log(user);

    if (user.registerPassword != user.registerRepeatPassword){
        //initial check
        alert("Please check your retyped password")
    }
    else
    {firebase.auth().createUserWithEmailAndPassword(user.registerEmail, user.registerPassword)
        .then(
            (userCredentials) => {
                //if signed in
                var signedUser = userCredentials.user;
                signedUser.updateProfile({
                    displayName: user.registerName
                }).then(() => {
                    console.log("hiiiiiiiiiii");
                })
            }
        )
        .catch(err => {
            //if there's error
            alert(err.message);
        })
    }
});