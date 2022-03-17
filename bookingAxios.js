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
    axios.post('https://crudcrud.com/api/9474b9bff09041d6acdc00f119c8cefd/Post',obj)
    .then((response)=>console.log(response.data)).catch(err=>console.log('Something happended wrong!'));
}
let id;
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/9474b9bff09041d6acdc00f119c8cefd/Post')
    .then((response)=>{
        console.log(response.data.length);
        for(var i=0; i<response.data.length;i++){
        showNewUserOnScreen(response.data[i]);
    }}).catch(err=>console.log('Something happended wrong!'));
});
function showNewUserOnScreen(user){

    const parentNode = document.getElementById('bookingList');
    const childHTML = `<li id=${user._id}> ${user._id} - ${user.name} - ${user.email}
                            <button onclick=deleteUser("${user._id}")> Delete </button>
                            <button onclick=editUser("${user._id},${user.name}")> Edit </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

// function editUser(userId,name){
//     console.log(userId,name);
//     // var nameText = document.querySelector('#name');
//     // var emailText = document.querySelector('#email');
//     // emailText.value = UserEmail;
//     //  nameText.value = userName;          
//     //      removeUserFromScreen(userId);
// }

function deleteUser(userId){
    //localStorage.removeItem(emailId);
    axios.delete(`https://crudcrud.com/api/9474b9bff09041d6acdc00f119c8cefd/Post/${userId}`)
    .then((response)=>removeUserFromScreen(userId)).catch(err=>console.error(err));

    

}

function removeUserFromScreen(userId){
    const parentNode = document.getElementById('bookingList');
    const childNodeToBeDeleted = document.getElementById(userId);

    parentNode.removeChild(childNodeToBeDeleted)
}