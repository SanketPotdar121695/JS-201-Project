let total=0
   
    let show=document.getElementById("show")
    let sad=document.getElementById("sad")
    
    function submitDetails(){
        
         alert("Card Details Saved Sucessfully")
        
    }
    function submitContact(){
    
       
            alert("Contact Details Saved Sucessfully")
        }
    
    function showprice(){
        let p=(localStorage.getItem("buy"))  
        //let p=+price.price
        show.innerText=p
        console.log(p)
         total=4322.36+(+p)
        console.log(total)
        sad.innerText=total
        
    }
    showprice()