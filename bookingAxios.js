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
  
    axios.post('https://crudcrud.com/api/52bf9618410f41e5a83bcfeb91f5abca/Post',obj)
    .then((response)=>console.log(response.data)).catch(err=>console.log('Something happended wrong!'))
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/52bf9618410f41e5a83bcfeb91f5abca/Post')
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
                            <button onclick=editUser("${user._id}")> Edit </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUser(userId){
    console.log(userId);
    axios.get(`https://crudcrud.com/api/52bf9618410f41e5a83bcfeb91f5abca/Post/${userId}`)
    .then((response)=>{
    var nameText = document.querySelector('#name');
    var emailText = document.querySelector('#email');
    emailText.value = response.data.email;
     nameText.value = response.data.name;          
    removeUserFromScreen(userId);
    form.addEventListener('submit',updateToCrudCrud);
    function updateToCrudCrud(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const obj = {
            name,
            email
        }
      x=1;
        axios.put(`https://crudcrud.com/api/52bf9618410f41e5a83bcfeb91f5abca/Post/${userId}`,obj)
        .then((response)=>{
             console.log(x);
            console.log(response)}).catch(err=>console.log('Something happended wrong!'));
    }
    }
    ).catch(err=>{console.error(err)})
}

function deleteUser(userId){
    //localStorage.removeItem(emailId);
    axios.delete(`https://crudcrud.com/api/52bf9618410f41e5a83bcfeb91f5abca/Post/${userId}`)
    .then((response)=>removeUserFromScreen(userId)).catch(err=>console.error(err));

    

}

function removeUserFromScreen(userId){
    const parentNode = document.getElementById('bookingList');
    const childNodeToBeDeleted = document.getElementById(userId);

    parentNode.removeChild(childNodeToBeDeleted)
}