var form = document.getElementById('myForm');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    localStorage.setItem('userDetails',name+" "+email);
})