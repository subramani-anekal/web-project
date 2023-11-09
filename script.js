let imgBox = document.getElementById("imgBox");
let  qrImage = document.getElementById("qrImage");
let  q = document.getElementById("q");

 function generateQR(){
     if(q.value.length >0){
     qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + q.value;
     
     imgBox.classList.add("show-img")
     }
     else{
         q.classList.add('error');
         setTimeout(()=>{
             q.classList.remove('error')
         },1000);
     }

 }
