// Функция факториала |
//                    |
//                    \/

function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
      return answer;
    }
    else if (n < 0) {
        return -1;
    }
    else {
      for(var i = n; i >= 1; i--) {
        answer = answer * i;
      }
      return answer;
    }
  }

var x = factorial(5);
alert(x);
document.write(x);