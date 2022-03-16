var form = document.getElementById('myForm');
form.addEventListener('submit',saveToLocalStorage);
function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const obj = {
        name,
        email
    }
    axios.post('https://crudcrud.com/api/0bbdef8171c8470fa9f04eb04e4bc0e9/Post',obj)
    .then((response)=>showNewUserOnScreen(response.data)).catch(err=>console.log('Something happended wrong!'));
}
function showNewUserOnScreen(user){
    const parentNode = document.getElementById('bookingList');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user.email}')> Delete </button>
                            <button onclick=editUser('${user.email}')> Edit </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUser(email){
    
    var nameText = document.querySelector('#name');
    var emailText = document.querySelector('#email');
    emailText.value = email;
    nameText.value = JSON.parse(localStorage.getItem(email)).name;
    deleteUser(email);

}
function deleteUser(emailId){
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}

function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('bookingList');
    const childNodeToBeDeleted = document.getElementById(emailId);

    parentNode.removeChild(childNodeToBeDeleted)
}