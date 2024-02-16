let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameButton=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


//boxes[8].innerText="hh";
let turnO=true; //playerX and placyerO


const winpatterns=[[0,1,2]
                ,[0,3,6]
                ,[0,4,8]
                ,[1,4,7]
                ,[2,5,8]
                ,[2,4,6]
                ,[3,4,5]
                ,[6,7,8]
            ];
        
            const resetgame=()=>{
                turnO=true;
                enabledboxex();
                msgContainer.classList.add("hide");
            }
var count=0;


            boxes.forEach((box)=>{
                box.addEventListener("click",()=>{
                    console.log("box was clicked !"+count++);
                    if(turnO){
                        box.innerText="O";
                        box.style.color="blue";                    
                        turnO=false;

                    }else{
                        box.innerText="X";
                        box.style.color="yellow";
                        turnO=true;
                    }


                    box.disabled=true;
            checkPatters();

                });

            });
            const draw=()=>{
                if(count==9){
                msg.innerText=" Match  Draw ";
                msgContainer.classList.remove("hide");
                count=0;
                }

            }

            const enabledboxex=()=>{
                for(box of boxes){
                    box.disabled=false;
                    box.innerText="";
                }
             }
            const disabledboxex=()=>{
                for(box of boxes){
                    box.disabled=true;
                }
             }
         const showWinner=(winner)=>{
           
            msg.innerText=` Congratulation ,  Winner is ${winner}`;
            msgContainer.classList.remove("hide");
         
            disabledboxex();
            }
      
        const checkPatters=()=>{
            for(patterns of winpatterns){
                let pos1val=boxes[patterns[0]].innerText;
                let pos2val=boxes[patterns[1]].innerText;
                let pos3val=boxes[patterns[2]].innerText;

              
                if(pos1val != ""&&pos2val != ""&&pos3val != ""){
                 
                    if(pos1val==pos2val&&pos2val==pos3val){

                        console.log("winner "+pos1val);
                        
                        showWinner(pos1val);
                       
                            
                    }
                    else{
                        draw();
                    }

                }


            }

        }

        resetbtn.addEventListener("click",resetgame);
        newGameButton.addEventListener("click",resetgame);