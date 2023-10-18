const generateNumbers = size => {
  let numbers = [];

  for (let i = 0; i < size; i++) {
    let numRan = Math.round(Math.random() * 10);
    while (numRan == 10) {
      numRan = Math.round(Math.random() * 10);
    }
    numbers.push(numRan);
  }

  return numbers;
}

/**
 *
 * @param {number[]} numbers
 */
const procesar = numbers => {
  let result = [];
  let counter = 1;
  let dsp;
  numbers = numbers.sort();
  let [ant] = numbers;

  for (let i = 1; i < numbers.length; i++) {
    dsp = numbers[i];
    if(ant === dsp){
      counter++;
    } else{
      result.push({num: ant, repeat: counter});
      counter = 1;
      ant = dsp;
    }
  }
  result.push({num: ant, repeat: counter});

  return result;
}
