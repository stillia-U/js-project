function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function question(template, _answer){
  let Quiz = prompt(template);
  
  if(Number(Quiz)===_answer){
      return true;
  }else{
      return false;
  }
}
function answer(first, type, second){
  switch(type){
    case "덧셈":
      return first + second;
      break;
    case "뺄셈":
      return first - second;
      break;
    case "곱셈":
      return first * second;
      break;
    case "나눗셈":
      return first / second;
      break;
  }
}

alert("사칙연산 게임 입니다. ai가 문제를 낸 후 여러분이 맞추는 게임입니다.");

let type=prompt("먼저, 어떤 연산을 할 것인지 정해주세요. (덧셈, 뺄셈, 곱셈, 나눗셈 형식으로 작성합니다.)");
let firstSize_s=prompt("그다음, 랜덤 숫자 범위를 정할 것 입니다. 가장 작은 범위를 먼저 정하세요. (1 이상 / 자연수만 입력해주세요.)");
let secondSize_s=prompt("그다음, 가장 큰 범위를 정하세요. (10초과 / 자연수만 입력해주세요.)");
let whether;

if(isNaN(firstSize_s && isNaN(secondSize_s))){
  alert("숫자가 아닙니다. 제대로 된 값을 입력해주세요.");
}else{

  let firstSize=Number(firstSize_s);
  let secondSize=Number(secondSize_s);
    
  if(firstSize<=1 && secondSize<=10){
      alert("범위를 벗어났습니다. 제대로된 범위를 작성해주세요.");
  }else{
      if(Number.isInteger(firstSize)&&Number.isInteger(secondSize)){
        let type_;
        switch(type){
          case "덧셈":
            type_='+';
            whether=0;
            break;
          case "뺄셈":
            type_='-';
            whether=0;
            break;
          case "곱셈":
            type_='×';
            whether=0;
            break;
          case "나눗셈":
            type_='÷';
            whether=0;
            break;
          default:
            whether=1;
            alert("제대로 된 타입을 입력해주세요.");
        }
        
        if(whether!=1){
          alert("기본 준비가 완료 되었습니다. ai가 이 정보에 따라 랜덤으로 다섯가지 문제를 제작합니다.");
          let firstquestion_front=rand(firstSize, secondSize);
          let firstquestion_back=rand(firstSize, secondSize);
          let secondquestion_front=rand(firstSize, secondSize);
          let secondquestion_back=rand(firstSize, secondSize);
          let thirdquestion_front=rand(firstSize, secondSize);
          let thirdquestion_back=rand(firstSize, secondSize);
          let fourthquestion_front=rand(firstSize, secondSize);
          let fourthquestion_back=rand(firstSize, secondSize);
          let fifthquestion_front=rand(firstSize, secondSize);
          let fifthquestion_back=rand(firstSize, secondSize);

          alert("모두 제작 되었습니다. 오래 걸리셧죠? 이제 확인 누르시면 바로 문제 풀을 수 잇슴미다.");

          let quiz=[
            '',
            question(`${firstquestion_front}${type_}${firstquestion_back}=?`, answer(firstquestion_front, type, firstquestion_back)),
            question(`${secondquestion_front}${type_}${secondquestion_back}=?`, answer(secondquestion_front, type, secondquestion_back)),
            question(`${thirdquestion_front}${type_}${thirdquestion_back}=?`, answer(thirdquestion_front, type, thirdquestion_back)),
            question(`${fourthquestion_front}${type_}${fourthquestion_back}=?`, answer(fourthquestion_front, type, fourthquestion_back)),
            question(`${fifthquestion_front}${type_}${fifthquestion_back}=?`, answer(fifthquestion_front, type, fifthquestion_back))
          ];
          let answers='정답_ ';
            for(let i=1; i<quiz.length; i++){
                if(quiz[i]){
                    answers=answers+`${i}. O `;
                }else{
                    answers=answers+`${i}. X `;
                }
            }
            alert(answers)
        }else{
          
        }
      }else{
        alert("자연수가 아닙니다.");
        whether=1;
      }
    }
  }


