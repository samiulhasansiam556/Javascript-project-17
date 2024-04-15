
let form = document.querySelector("form");
let main = document.querySelector(".main");
let cheakStatus = 0;



form.addEventListener("submit", (event)=>{

    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;
    let meassage = event.target.meassage.value;
   
    var userData = JSON.parse(localStorage.getItem("UserDetails")) ?? []; 

    for(let c of userData){
        if(email == c.email || phone == c.phone){
            cheakStatus = 1;
            break;
        }
    }
  
    if(cheakStatus== 1){
        alert("Email or Phone mumber already exist");
        cheakStatus = 0;

    }else{
        var userData = JSON.parse(localStorage.getItem("UserDetails")) ?? []; 
        userData.push({
           'name':name,
           'email':email,
           'phone':phone,
           'meassage': meassage
        });
   
        localStorage.setItem("UserDetails",JSON.stringify(userData));

    }

    //  event.target.reset();

     display(); 
});

  


let display=()=>{

    var userData = JSON.parse(localStorage.getItem("UserDetails")) ?? []; 
    let finalData = '';
    userData.forEach((element,i) =>{
        finalData+= ` <div class="items">
        <i class="fa-solid fa-xmark" onclick="removeData(${i})"></i>
        <h4>Name: ${element.name}</h4>
        <h4>email: ${element.email}</h5>
        <h4>phone: ${element.phone}</h5>
        <h4>message: ${element.meassage} </h5>
    </div>`
    }); 
    
    main.innerHTML = finalData;
  }



  let removeData=(index)=>{
    
    var userData = JSON.parse(localStorage.getItem("UserDetails")) ?? []; 
    userData.splice(index,1);
    localStorage.setItem("UserDetails",JSON.stringify(userData));
    display(); 
  }


   display(); 
