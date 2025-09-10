let gameseq=[]// game seq track krna va 
let userseq=[]//user seq track krna va 

let btns=["yellow","red", "green","purple"];// random btns jihna ch random flash auni aa en btn me se koi random btn choose krna va 


// te es seq nu asi array ch store krange  dekhna va kehre kehre btn flsh kita va 
 
let started =false ; //hle start nahi aa
let level =0;//level v hle 0 aa kyunkigame start  nahi hoye 

let h2=document.querySelector("h2");

//  // 1 step jdo koi v key napeya ta game start ho jawe
  document.addEventListener("keypress",function(){//event listner lata v ki koi v keyprees hove te game start ho jaye
       if(started==false){
          console.log("game is started");
     started= true;// started de value nu update kr k ase kr deta va true sada game sirf ik vaar he start ho skda aa 
   
   levelup();//jdo flash howe naal he levleup hoje
   
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
    h2.innerText=`level${level}`//jdo levele up hove te nall he h2 in text v bdl j te level show howe
//  game koi v random btn nu choose krega te osnu flash krvaega 
    let randidx=Math.floor(Math.random()*3);
    randcolor=btns[randidx];// random idx upar aa geya hun randam color choose kr lena aa
    let randbtn=document.querySelector(`${randcolor}`)// random color se hum apni class k naam chosse krenge 

    btnflash(randbtn);// btn nu flash krvan vaste ik function bna lenge te ethe call kr davange
 }

 
    
