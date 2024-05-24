let userScore=0;
let CompScore=0;

const choices=document.querySelectorAll(".choose");
const msg=document.querySelector(".msg");
const uScore=document.querySelector(".user-score")
const cScore=document.querySelector(".comp-score")
const RamdomGen=()=>{
    const arr=["rock","paper","scissor"];
  let index=  Math.floor(Math.random()*3);
    return arr[index];
}



const empire=(userwin)=>{
if(userwin){
    console.log("you win");
    msg.innerText="you win";
    msg.style.backgroundColor="green"
    userScore++;
    uScore.innerText= userScore;

}else{console.log(" computer win");
    msg.innerText="you loss";
    msg.style.backgroundColor="red";
    CompScore++;
    cScore.innerText=CompScore;
}
};




const playGame=(userchoice)=>{
console.log(" Your choice  "+userchoice);
let compchoice= RamdomGen();
console.log("computer choice  "+compchoice);
if(userchoice===compchoice){
    console.log("match is draw");
}else{
   let userwin = true;
    if(userchoice==="rock"){
       userwin = compchoice==="paper"?false:true; 
    } else if(userchoice==="paper"){
        userwin = compchoice==="scissor"?false:true;
    }  else{
        userwin = compchoice==="rock"?false:true;
    }  empire(userwin);
    }}




choices.forEach((choose)=>{
    choose.addEventListener("click",()=>{
        const userchoice=choose.getAttribute("id");
        playGame(userchoice);
    })
})