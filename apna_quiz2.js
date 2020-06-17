let startbutton=document.getElementById("start-btn");
let score;
let question_container=document.getElementById("question-container");
let start_again=document.getElementById("start-again");
// start button to strat quiz

startbutton.addEventListener("click", startgame);

let questions=document.getElementById("question");
let timer_id= document.getElementById("timer1");

let btngrid=document.getElementById("btn-grid");

let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4 =document.getElementById("btn4");

let nextbtn=document.getElementById("next-btn");


function startgame(){

startbutton.classList.add("hide");
question_container.classList.remove("hide");
//start- again button
start_again.classList.add("hide");
nextbtn.classList.remove("hide");
score=0;
nextquestion();
}


let i=0;
function nextquestion(){

    showquestion();
    nextbtn.addEventListener("click", showquestion);
    


}
// function to show questions

function showquestion(){

    if(i===array.length){
        question_container.classList.add("hide");
        nextbtn.classList.add("hide");
        start_again.classList.remove("hide");
        start_again.addEventListener("click",function(){
            location.reload();
        })
        document.getElementById("score").innerText="your score :"+score;
        return; 
       }
    

   timer();

    
    let flag=1;

    questions.innerText=array[i].question;
    
    btn1.style.backgroundColor=" rgb(54, 173, 131) "  
    btn2.style.backgroundColor="rgb(54, 173, 131)"
    btn3.style.backgroundColor="rgb(54, 173, 131)"
    btn4.style.backgroundColor="rgb(54, 173, 131)"
    // btn1;
    btn1.innerText=array[i].answer[0]
    btn1.addEventListener("click", function(){
        
       if(flag==1){
        if(array[i-1].answer[0]==array[i-1].correctanswer){
            btn1.style.backgroundColor="green";
            flag=0;
            score++;
        }
        else{
            btn1.style.backgroundColor="  rgb(245, 8, 8)";
            flag=0;
        }
    }
    })

    
    //btn 2;
  
    btn2.innerText=array[i].answer[1];
    btn2.addEventListener("click", function(){
        if(flag==1){
        if(array[i-1].answer[1]==array[i-1].correctanswer){
            btn2.style.backgroundColor="green";
            flag=0;
            score++;
        }
        else{
            btn2.style.backgroundColor="rgb(245, 8, 8)";
            flag=0;
        }
    }
    
    })

    //btn3;

    btn3.innerText=array[i].answer[2];
    btn3.addEventListener("click", function(){
        if(flag==1){
    
       if(array[i-1].answer[2]==array[i-1].correctanswer){
            btn3.style.backgroundColor="green";
            flag=0;
            score++;
        }
        else{
            btn3.style.backgroundColor="  rgb(245, 8, 8)";
            flag=0;
        }
    }
    })

    //btn4
    btn4.innerText=array[i].answer[3];
    btn4.addEventListener("click", function(){
    
       if(flag==1){

        if(array[i-1].answer[3]==array[i-1].correctanswer){
            btn4.style.backgroundColor="green";
            flag=0;
            score++;
        }
        else{
            btn4.style.backgroundColor="  rgb(245, 8, 8)";
            flag=0;
        }
    }
    })

    
    i++;
    
}

// timer function
function timer(){
    let ti =1;
    var count = 15;
var timer = setInterval(function() {
  timer_id.innerText=count;
  count--;
  nextbtn.addEventListener("click",function(){
      ti=0;
  });
  if(count === -1 || ti==0) {
    clearInterval(timer);
  }
}, 1000);
if (count===-1){
    return -1;
}
}

let array =[
    {
        question:"when indian cricket team won first world cup?",
        answer:[
            '2007',
            '1984',
            '2011',
            '1983'

        ],
        correctanswer:'1983'

    },
    {
        question:"CSS stands for",
        answer:[
            "conceptual standard sheet",
            "cascading style sheet",
            "cascading standard sheet",
            " none of the above"
        ],
        correctanswer:'cascading style sheet'
    },
    {
        question:"NEYMAR relates to_______ ?",
        answer:[
            "football",
            "cricket",
            "hollywood",
            "basketball"],
    
        correctanswer:"football"
    },
    {
        question:"BillGates is_____?",
        answer:[
            "Garib",
            "Ameer",
            "madhyam vargiya",
            "majdoor"
        ],
        correctanswer:"Ameer"
    },
    {
        question:"who is Rajkumar?",
        answer:[
            "student",
            "engineer",
            "prince",
            "none of the above"
        ],
        correctanswer:"prince"
    },
    {
    question:"displacement is____ ?",
    answer:[
        "scaler",
        "Vector",
        "always Zero",
        "Nothing just a word"
    ],
    correctanswer:"0"
     },
     {
         question:"fastest memory ?",
         answer:[
             "cache",
             "primary",
             "registers",
             "pendrive"
         ],
         correctanswer:"registers"
     },
     {
         question:"owner of tesla ?",
         answer:[
             "warren buffet",
             "matt henry",
             "rajkumar Parmar",
             "Elon Musk"
         ],
         correctanswer:"Elon Musk"
     },
     {
         question:"why crossing light is of red color? In terms of physics",
         answer:[
             "red is a sign of danger",
             "wavelength is high",
             "frequency is low",
             "red is able to see from long distance"
         ],
         correctanswer: "wavelength is high"
     }
]