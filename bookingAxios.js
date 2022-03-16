var form = document.getElementById('myForm');
form.addEventListener('submit',saveToCrudCrud);
function saveToCrudCrud(event) {
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
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/0bbdef8171c8470fa9f04eb04e4bc0e9/Post')
    .then((response)=>{
        console.log(response.data.length);
        for(var i=0; i<response.data.length;i++){
        showNewUserOnScreen(response.data[i]);
    }}).catch(err=>console.log('Something happended wrong!'));
});
function showNewUserOnScreen(user){
    const parentNode = document.getElementById('bookingList');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user.email}')> Delete </button>
                            <button onclick=editUser('${user}')> Edit </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
   
}

// function editUser(user){
//     console.log(user.email,user.name);
//     var nameText = document.querySelector('#name');
//     var emailText = document.querySelector('#email');
//     emailText.value = user.email;
//     nameText.value = user.name;          
//     deleteUser(email);
// }

// function deleteUser(emailId){
//     localStorage.removeItem(emailId);
//     removeUserFromScreen(emailId);

// }

// function removeUserFromScreen(emailId){
//     const parentNode = document.getElementById('bookingList');
//     const childNodeToBeDeleted = document.getElementById(emailId);

//     parentNode.removeChild(childNodeToBeDeleted)
// }