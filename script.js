let url = "https://davids-restaurant.herokuapp.com/menu_items.json"

let menu_items = null;

$("document").ready(function(){
    $.get(url,function(data, status){
        if (status == "success"){
            menu_items = data.menu_items;
            for (const key in data.menu_items) {
                let opt = document.createElement("option");
                opt.textContent = data.menu_items[key].name;
                opt.value = key; 
                document.querySelector('#menu').appendChild(opt);
            }
        }
       
    });
    
document.querySelector("#menu").addEventListener("change",showdetails);

function showdetails(e){
    let index = e.target.value;
    if(menu_items != null){
        let id = menu_items[index];
        let pricesmall;
        
        if(id.price_small != null){
            pricesmall = id.price_small;
            
        }
        else{
            pricesmall = "Not available";
        }
        let descrp = id.description;
        if(descrp == ""){
            descrp = "Description not available";
        }
        document.querySelector("#menuname").textContent = id.name;
        document.querySelector("#id").textContent = id.id;
        document.querySelector("#sname").textContent = id.short_name;
        document.querySelector("#description").textContent = descrp;
        document.querySelector("#psmall").textContent = pricesmall;
        document.querySelector("#plarge").textContent = id.price_large;
        document.getElementById("table1").style.display = "block";
    }

    
}


});


