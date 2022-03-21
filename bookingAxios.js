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
  
    const saveOnServer = async ()=>{
        try
        {
            const token = await axios.post('https://crudcrud.com/api/e6891484562b480bbb63f8112a54cc7c/Post',obj)
            console.log(token.data);
         }
        catch(err){
            console.log('Something happended wrong!');
        }
}
saveOnServer();
}

window.addEventListener('DOMContentLoaded',()=>{
    const domContent = async ()=>{
    try{
      const domData = await axios.get('https://crudcrud.com/api/e6891484562b480bbb63f8112a54cc7c/Post');
      console.log(domData.data.length);
      for(var i=0; i<domData.data.length;i++){
      showNewUserOnScreen(domData.data[i]);
      }
    }

catch(err)
{
    console.log('Something happended wrong!');
}
}
domContent();
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
    const edit = async ()=>{
        try{

   var response = await axios.get(`https://crudcrud.com/api/e6891484562b480bbb63f8112a54cc7c/Post/${userId}`);
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
        var response = axios.put(`https://crudcrud.com/api/e6891484562b480bbb63f8112a54cc7c/Post/${userId}`,obj);
            console.log(response)
    }
    }
    catch(err)
    {
    console.error(err);
}
    }
    edit();
}

function deleteUser(userId){
    const deleteUsr = async()=>{
        try{
    const response = axios.delete(`https://crudcrud.com/api/e6891484562b480bbb63f8112a54cc7c/Post/${userId}`);
    removeUserFromScreen(userId);
        }
    catch(err){
        console.error(err);
    }
}
deleteUsr();
}

function removeUserFromScreen(userId){
    const parentNode = document.getElementById('bookingList');
    const childNodeToBeDeleted = document.getElementById(userId);

    parentNode.removeChild(childNodeToBeDeleted)
}