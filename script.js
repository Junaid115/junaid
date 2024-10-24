function begin(){
    let x = 25
    const intervalId = setInterval(() => {
        x -= 1
        document.getElementsByClassName('timer')[0].innerText = x
      }, 1000);
    return intervalId
}
function end(intervalId){
    setTimeout(() => {
        clearInterval(intervalId);
        console.log('Interval stopped');
        document.getElementsByClassName('answer')[0].classList.toggle('answer1')
        evaluate()
      }, 25000);
}
function startTimer() {
    document.getElementsByClassName('answer')[0].classList.add('answer1')
    const intervalId = begin()
    end(intervalId)
    
}
function launchConfetti() {
    confetti({
        particleCount: 1000,
        spread: 400,
        origin: { y: 0.6 }
    });
}



function evaluate(){
    alert("Your time is up!!\nLets evaluate your work")

    let txt = document.getElementsByTagName('input')[0].value
    let sampleText = document.getElementsByClassName('sampleText')[0].innerText
    if(txt === sampleText){
        alert("You won")
        launchConfetti()
    }
    else{
        alert("You lose")
    }
}