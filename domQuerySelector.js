 var item = document.querySelector('.list-group-item:nth-child(2)');
 item.style.backgroundColor = 'green';
 var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
 thirdItem.style.display='none';
 var items = document.querySelectorAll('.list-group-item');
 items[1].style.backgroundColor = 'green';
var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var i=0; i< odd.length; i++){
    odd[i].style.backgroundColor ='green';
}