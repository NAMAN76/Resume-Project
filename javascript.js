var button=document.getElementsByClassName('plick');

for(var i=1;i<button.length;i++){

    button[i].addEventListener('click',function(event){
   
        event.preventDefault();
      var targetsection=this.textContent.trim().toLowerCase();
     // console.log(targetsection);
     var trid=document.getElementById(targetsection);
          
       var trac = trid.getBoundingClientRect();
       var tr=trac['top'];
      var cp=0;
      
       var id=setInterval(function(){
        

       if(cp>=tr){
           clearInterval(id);

       }
      else{
         window.scrollBy(0,50);
         cp=cp+50;
      }


      },50);

      
     






    });


}

var id=document.getElementById('skills');







window.addEventListener('scroll',function(){

var idc=id.getBoundingClientRect();

   var idtc=idc['top'];
    if(idtc<window.innerHeight){
        console.log('yes');

    }
    
    
    
    
    
})

/*var buttons=document.querySelectorAll('#header .nav a');

for(var i=0;i<buttons.length;i++){

buttons[i].addEventListener('click',function(){
 
    var targetelement=this.textContent.trim().toLowerCase();
    var trid=document.getElementById(targetElement);











})



}*/