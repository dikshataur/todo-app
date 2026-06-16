
let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener("click", function(){
    let item = document.createElement('li'); //we created an li
    item.innerText = inp.value; //hmne input me jo bhi enter kiya hai wo li me set hoga as it's innertext.
    ul.appendChild(item); //li is append into the ul

    let delBtn = document.createElement('button'); //we created an button
    delBtn.innerText = "delete"; //delBtn ka innertext set hoga to delete 
    delBtn.classList.add("delete"); //jo btn hmne create kiye hai unme delete class add hoga
    item.appendChild(delBtn); //delbtn is append into the li

    inp.value = "" //to clear the input after adding todo.
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){  //target is kis chij ki vajah se event occur hua (yha -> li and buttton ki vajah se click ho rha hai, so click is basically a event &agr us target ke nodename ki value agr BUTTON ke equal hogi to kuch kam perform kro)
        let listItem = event.target.parentElement; // hmne button ke parent ko slect kr liya(which is li)
        listItem.remove(); //to jaise hi hamare target click hoga vasie hi li remove hoga.
        console.log("deleted");
    }
});
 


