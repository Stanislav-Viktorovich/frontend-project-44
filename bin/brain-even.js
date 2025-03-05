import readlineSync from 'readline-sync';
const evenGame = () => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for(let i = 0; i < 3; i++){
    let random = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${random}`);
    const question = readlineSync.question('Your answer:')
    let programUnswer ;
    if (random % 2 === 0){
      programUnswer = 'yes';
    }else{
      programUnswer = 'no';
    }
    
    if(programUnswer === question){
      console.log('Correct!');
    }else{
      console.log(`'${question}' is wrong answer ;(. Correct answer was ${programUnswer}. \n Let's try again, Bill!`);
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

evenGame();