var items = document.getElementsByClassName('list-group-item');

items[2].style.backgroundColor = 'yellow';
console.log(items[2]);
for(var i=0;i<items.length;i++){
    if(i!=2){
    items[i].style.fontWeight = 'bold';
     items[i].style.backgroundColor = '#f4f4f4';
    }
}