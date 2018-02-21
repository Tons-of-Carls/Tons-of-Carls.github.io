var message_number = 0
var input_text_element = document.getElementById("textInput");
    
var firebaseRef = firebase.database().ref()
var firebaseValueRef = firebaseRef.child("Main");

firebaseValueRef.on('value', function(snapshot){
    var messages_list = document.getElementById("messages");
    
    if (snapshot.val() == null)
    {
        messages_list.innerHTML = "<li>No Messages</li>";
        message_number = 0
    }
    else
    {
        create_HTML = '';
        
        list_of_messages = String(snapshot.val()).split(',');
        message_number = list_of_messages.length;
        for(var i = 0; i < list_of_messages.length; i++)
        {
            create_HTML += '<li>' + list_of_messages[i] + '</li>';
        }
        
        messages_list.innerHTML = create_HTML;
    }
});

firebaseValueRef.on('child_added', function(snapshot){
   message_number += 1; 
});

function sendData()
{
    firebaseValueRef.child(String(message_number)).set(input_text_element.value)
    input_text_element.value = ''
}