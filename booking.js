var form = document.getElementById('myForm');
var listItem = document.getElementById('bookingList');
form.addEventListener('submit', addItems);
var count=1,i=0;
function addItems(e){
    
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var key= "key"+count++;
    myObj={Name:name,Email:email};
    var myObj_serialized = JSON.stringify(myObj);
    localStorage.setItem(key, myObj_serialized);
        //var key = localStorage.key(i++);
        var objDeserialized = JSON.parse(localStorage.getItem(key));
        if(objDeserialized.Name!='' || objDeserialized.Email!=''){
            var li = document.createElement('li');
            li.className ='itemList';
            li.appendChild(document.createTextNode(objDeserialized.Name+" "+objDeserialized.Email));
            var edit = document.createElement('button');
            var deletebtn = document.createElement('button');
            edit.className = 'edit';
            deletebtn.className='delete';
            edit.appendChild(document.createTextNode('Edit'));
            deletebtn.appendChild(document.createTextNode('Delete'));
            li.appendChild(edit);
            li.appendChild(deletebtn);
            listItem.appendChild(li);
            console.log(key);
        
    }
    else{
        alert('Please fill all fields');
    }
}