const questions=[{
    'ques':'which of the follwoing markup language?',
    'a':'html',
    'b':'javascript',
    'c':'python',
    'd':'c++',
    'correct':'html'
},{
    'ques':'best language for coding?',
    'a':'php',
    'b':'javascript',
    'c':'python',
    'd':'c++',
    'correct':'javascript'
},{
    'ques':'which ide is best for coding?',
    'a':'visual studio ',
    'b':'replit',
    'c':'sublime',
    'd':'notepad',
    'correct':'visual studio'
},{
    'ques':'html css js for frontend ,backend,database,other..?',
    'a':'backend',
    'b':'frontend',
    'c':'database',
    'd':'others',
    'correct':'frontend'
}
] 

let index=0; 
let total=questions.length
let right=0
let wrong=0
const h1=document.getElementById('h1')
const optiontext=document.querySelectorAll('.optionss')
const loadquestions =()=>{
    if(index===total){
        return endquez()
    }
    reset()
const data=questions[index]
let checked=data.ans;[]
console.log(data);
h1.innerText=`${index+1} )${data.ques}`;
optiontext[0].innerText=data.a;
optiontext[1].innerText=data.b;
optiontext[2].innerText=data.c;
optiontext[3].innerText=data.d;
}[[]]

const submitquez=()=>{
    const Ans=getanswer()
    if(Ans===data.correct){
right++
    }else{wrong++}
    index++
    loadquestions()
}
const getanswer=()=>{
    
    optiontext.forEach(
        (input)=>{
            if(input==checked){
               return input
            }
        }
    )
}
const reset=()=>{
    optiontext.forEach(
        (input)=>{
            input.checked==false
        }
    )
}
const endquez=()=>{}
loadquestions()


