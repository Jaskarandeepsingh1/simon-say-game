let gameseq=[]// 
let userseq=[]//

let btns=["yellow","red", "green","purple"];
 
let started =false ; //
let level =0;//

let h2=document.querySelector("h2");


  document.addEventListener("keypress",function(){//
       if(started==false){
          console.log("game is started");
     started= true;//
   
   levelup();//
   
    } 
    });
    function btnflash(btn){
        btn.classList.add("flash")
        setTimeout(function(){
            btn.classList.remove("flash");
        },250);
    }
  // // // 1 step end 
    // // 2 step
 function levelup(){
    level++;
    h2.innerText=`level${level}`/
// 
    let randidx=Math.floor(Math.random()*3);
    randcolor=btns[randidx];// 
    let randbtn=document.querySelector(`${randcolor}`)// 

    btnflash(randbtn);// 
 }

 
    

