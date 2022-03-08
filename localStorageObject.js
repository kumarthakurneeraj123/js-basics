var form = document.getElementById('myForm');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    myObj ={
        Name:name, Email:email
    }
    var objSerialized = JSON.stringify(myObj);
    localStorage.setItem('myObj',objSerialized);
    
    myOb = JSON.parse(localStorage.getItem('myObj'));
    console.log(myOb);
    var msg = document.getElementById('msg');
    msg.textContent = myOb.Name+" "+myOb.Email;
})