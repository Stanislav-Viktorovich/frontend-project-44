import readlineSync from 'readline-sync';
const calcGame = () =>{
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?');
  console.log(`Hello, ${name}`);
  console.log('What is the result of the expression?')
  
  for(let i = 0; i < 3; i++){
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    // console.log(num1, num2, randomOperation() )
    let result;
    let operation = randomOperation()
    if(operation === '-'){
      result = num1 - num2;
    }else if(operation === '+'){
      result = num1 + num2;
    }else if(operation === '*'){
      result = num1 * num2;
    }

    console.log(`Question:${num1} ${operation} ${num2}`)
    const question = +readlineSync.question('Your answer:')
    if(question === result){
      console.log('Correct!');
    }else{
      console.log(`'${question}' is wrong answer ;(. Correct answer was ${result}. \n Let's try again, ${name}!`);
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}


const randomOperation = () =>{
  let arr = ['+', '-', '*'];
  const random = Math.floor(Math.random() * 3)
  return arr[random];
}

calcGame();