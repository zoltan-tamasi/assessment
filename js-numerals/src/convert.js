
const ones = (num) => (
  num === '1' ? 'one' :
  num === '2' ? 'two' :
  num === '3' ? 'three' :
  num === '4' ? 'four' :
  num === '5' ? 'five' :
  num === '6' ? 'six' :
  num === '7' ? 'seven' :
  num === '8' ? 'eight' :
  num === '9' ? 'nine' : ''
);

const teens = (num) => (
  num === '0' ? 'ten' :
  num === '1' ? 'eleven' :
  num === '2' ? 'twelve' :
  num === '3' ? 'thirteen' :
  num === '4' ? 'fourteen' :
  num === '5' ? 'fifteen' :
  num === '6' ? 'sixteen' :
  num === '7' ? 'seventeen' :
  num === '8' ? 'eighteen' :
  num === '9' ? 'nineteen' : ''
);

const tens = (num) => (
  num === '0' ? '' :
  num === '1' ? 'ten' :
  num === '2' ? 'twenty' :
  num === '3' ? 'thirty' :
  num === '4' ? 'forty' :
  num === '5' ? 'fifty' :
  num === '6' ? 'sixty' :
  num === '7' ? 'seventy' :
  num === '8' ? 'eighty' :
  num === '9' ? 'ninety' : ''
);

const convert = (num) => {

  if ((typeof num) !== 'number') {
    throw new TypeError('parameter must be numeric');
  }

  if (num === 0) return 'zero';

  const numString = num.toString().split('');
  const [head, ...tail] = numString;

  if (numString.length > 3) {
  } else if (numString.length === 3) {
    return ones(head) + ' hundred and ' + convert(parseInt(tail.join()));
  } else if (numString.length === 2) {
    if (head === '1') {
        return teens(tail[0]);
    } else { 
        return (tail === '0' ? '' : tens(head) + '-') + ones(tail[0]);
    }
  } else {
    return ones(head);
  }
};

module.exports = convert;
