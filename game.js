document.getElementById("box").onclick = function () { myFunction() };
function myFunction() {
  let a
  // let a=94;
  const win = (userinput) => {
    return userinput == a ? true : false
  }
  // let c = true
  // while(c) {
  let color = prompt("What is your favrt color")
  document.body.style.background = color;
  a = Math.random() * 100;
  a = Number.parseInt(a)
  console.log(a)
  let total = 0;
  for (let i = 0; i < 100; i++) {

    let userinput = prompt("guess the number")
    if (win(userinput)) {
      document.getElementById('win').innerHTML = `You Win you guessed the right number: ${a}`
      break;
    }

    else if (a < userinput) {
      document.getElementById("tryagain").write = 'Try again'
      //    let a2='number is smaller'
      // document.write(a2) 
      alert(" Your number is bigger ")


    }
    else if (a > userinput) {
      console.log("Try again");
      alert("Your number is smaller")
      //  let a1= "Number is bigger from your number"
      //  document.write(a1)

    } total += 1;
    console.log("turn : " + total)
  }
  document.getElementById('result').innerHTML = `Your score : ${total} Guesses`
}

  // c = confirm("you want to play again")
// }
