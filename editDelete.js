var form = document.getElementById('myForm');
var listItem = document.getElementById('bookingList');
form.addEventListener('submit',onSubmit);
var count =0;
function onSubmit(e){
    e.preventDefault();
 var name = document.getElementById('name').value;
 var email = document.getElementById('email').value;
 var user={
    name, email
 }

  if(localStorage.getItem(email)==null){
     var obj = JSON.stringify(user);
     const email = user.email;
     localStorage.setItem(email,obj);
 }

     showUserOnScreen(user);
 
}
window.addEventListener('DOMContentLoaded',()=>{
    const localStorageObj = localStorage;
    var keysObj = Object.keys(localStorageObj);
    
    for(var i=0; i<keysObj.length;i++){
        var objToString = JSON.parse(localStorage.getItem(keysObj[i]));
    var li = document.createElement('li');
    li.className ='list-group';
    li.appendChild(document.createTextNode(objToString.email + "  "+ objToString.name));
    var deletebtn = document.createElement('button');
    deletebtn.id = 'delete';
    deletebtn.style.backgroundColor='pink';
    deletebtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(deletebtn);
    listItem.appendChild(li);
    }
})
function showUserOnScreen(user){
    var li = document.createElement('li');
    li.className ='list-group';
    li.appendChild(document.createTextNode(user.name + "  "+ user.email));
    var deletebtn = document.createElement('button');
    deletebtn.id = `${user.email}`;
    deletebtn.onclick =deleteUser(user.email);
    deletebtn.style.backgroundColor='pink';
    console.log(deletebtn);
    deletebtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(deletebtn);
    listItem.appendChild(li);
}
function deleteUser(emailId){
    console.log(emailId);
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
}
function removeUserFromScreen(emailId){
    console.log(emailId);
    const parentNode = document.getElementById('bookingList');
    const childNodeToBeDeleted = document.getElementById(emailId);

    parentNode.remove(childNodeToBeDeleted)
}