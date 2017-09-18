function countdown(callback){
  window.setTimeout(callback, 2000);
};

function createMultiplier(multiplierValue){
  return function(n){
    return n*multiplierValue};
  };

var doubler = createMultiplier(2);

var tripler = createMultiplier(3);

function multiplier(num1,num2){
  return num1 * num2
};

function doublerWithBind(number){
  return multiplier.bind(null,2)
};

function triplerWithBind(number){
  return multiplier.bind(null,3)
};
