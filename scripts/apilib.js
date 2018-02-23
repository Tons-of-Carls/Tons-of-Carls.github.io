var firebaseRef = firebase.database().ref()
var firebaseValueRef = firebaseRef.child("Main");

var logged_in = false
var initial_setup = false
var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(results){
    document.getElementById("debug").innerText = "Logged in as: " + firebase.auth().currentUser.displayName;
    var firebaseUIRef = firebaseRef.child('message_ui_code')
    firebaseUIRef.on('value', function(snapshot){
        document.getElementById('main_container').innerHTML = String(snapshot.val())
        logged_in = true;
        
        if(!initial_setup)
        {
            firebaseValueRef.on('value', function(snapshot){
                if(logged_in)
                {
                    initial_setup = true
                    var messages_list = document.getElementById("messages");
                    
                    if (snapshot.val() == null)
                    {
                        messages_list.innerHTML = "<li>No Messages</li>";
                    }
                    else
                    {
                        create_HTML = '';
                        
                        snapshot.forEach(function(childSnapshot){
                            create_HTML += '<li>' + childSnapshot.val() + '</li>';
                        });
                        
                        messages_list.innerHTML = create_HTML;
                    }
                }
            });

        }
        
    });
}).catch(function(error){
    error_details = [error.code, error.message, error.email, error.credential]
});


function signout()
{
    firebase.auth().signOut().then(function(){
        document.getElementById("debug").innerText = "You Have Logged Out.";
    }).catch(function(error){
        document.getElementById("debug").innerText = "An error occured while trying to log you out.";
    });
}

function sendData()
{
    var input_text_element = document.getElementById("textInput");
    firebaseValueRef.post().set(firebase.auth().currentUser.displayName + ': ' + input_text_element.value)
    input_text_element.value = ''
}