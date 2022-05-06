var currentTab = 0;
// var qNum=1;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  if(currentTab===0){
    document.getElementById("prevBtn").style.display= "none"
    
  }
 else{
    document.getElementById("prevBtn").style.display ="block"
  }

  const inputs = document.getElementsByTagName('input[type="radio"]');

  console.log(typeof(inputs))
  
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");

  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    alert("Form is Submitted Succesfully")
    return false;
  }
  showTab(currentTab);
}

function Prev(n){


  var x = document.getElementsByClassName("tab");

  x[currentTab].style.display = "none";
  currentTab = currentTab - n;
  showTab(currentTab);
}

// function handleNo(){
//   qNum++;
//   var qNo= document.querySelector('#questionNumber') ;
//   qNo.innerHtml = qNum;
// }

// handleNo();


//  Timer For Quiz
QuizTime = 5
count = 1*60

const countMinutes = (seconds) =>{
  return Math.floor(seconds/60)
} 

const countRemainingSeconds = (seconds) => {
  return seconds - Math.floor(seconds/60)*60
}


const  quizInterval = setInterval(()=>{
console.log(`Minute ${countMinutes(count)} Seconds ${countRemainingSeconds(count)}`)
document.getElementById("timer-minutes").innerHTML = countMinutes(count);
document.getElementById("timer-seconds").innerHTML = countRemainingSeconds(count);
count= count - 1;

if(count === 0){
  // alert("Time is over and your form is submitted")
  document.getElementById("regForm").submit();
  alert("Time is Over \n Form is Submitted")
  document.getElementById("regForm").style.display = none;
  clearInterval(quizInterval);
  return false; 
}
},1000)






















 