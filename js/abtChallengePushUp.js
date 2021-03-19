var renderPost = ({
    displayName,numberOfLikes
}) => {
    return `
    <div class="card">
      <div class="card-header">
        <h3>${displayName}</h3>
      </div>
      <div class="card-body">
        <div class="videoContainer row">
          <video src="assets/mov/IMG_E2501.MOV" controls></video>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-left align-items-center">
        <span class="peopleLiked">${numberOfLikes}</span>
        <i class="far fa-heart p-2" style="color: rgb(247, 108, 108); font-size: 25px"></i>
        <i
          class="far fa-comment"
          style="color: rgb(110, 110, 241); font-size: 25px"
        ></i>
        <!-- <i class="fas fa-comment" style="color: rgb(210, 210, 250); font-size: 25px"></i> -->
      </div>
    </div>
    `
}

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true});
db.collection('usersPosts').where("challengeID","==","pushUp")
    .get()
    .then(querySnapshots => {
        // $(".video-and-posts").append(renderPost({"OMGHIII",3}))
        querySnapshots.forEach(doc => {
            console.log(doc.id, " => ", doc.data());
        })

    })
    .catch((err) =>{
        console.log(err)
    })
var storageRef = firebase.storage().ref();
$("#upload-form").submit(e => {
    e.preventDefault();
    
    
})
$(".file-input").onchange = function(event) {
    var fileList = inputElement.files;
    var fileInput = $("file-input");
    var currUser = firebase.auth().currentUser();
    var file = e.target.file[0];
    console.log(file);
    // if(currUser != null){
        var fileRef = storageRef.child(`${currUser.uid}/${file.name}`);
        var uploadTask = storageRef.put(file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGE, 
            (snapshots) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (err) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                      alert("User doesn't have permission to access the object");
                    
                      break;
                    case 'storage/canceled':
                      // User canceled the upload
                      alert("User canceled the upload");
                      break;
              
                    // ...
              
                    case 'storage/unknown':
                        alert("Unkown error")
                      // Unknown error occurred, inspect error.serverResponse
                      break;
                  }
            },
            () => {
                alert("Upload completed successfully"); 
            })
    // }
}