
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

  const numParsed = parseInt(num);

  if (isNaN(numParsed)) {
    throw new TypeError('parameter must be numeric');
  }

  if (numParsed === 0) return 'zero';

  const numString = numParsed.toString().split('');
  const [head, ...tail] = numString;

  if (numString.length === 4 && head === '1') {
    const tail = numString.slice(-2);
    const head = numString.slice(0, -2);
    if (tail.join('') === '00') {
      return teens(head[1]) + ' hundred';
    } else { 
      return teens(head[1]) + ' hundred and ' + convert(parseInt(tail.join('')));
    }
  } else if (numString.length > 3) {
    const tail = numString.slice(-3);
    const head = numString.slice(0, -3);
    if (tail.join('') === '000') {
      return convert(parseInt(head.join(''))) + ' thousand';
    } else if (tail[0] === '0') { 
      return convert(parseInt(head.join(''))) + ' thousand and ' + convert(parseInt(tail.join('')));
    } else {
      return convert(parseInt(head.join(''))) + ' thousand ' + convert(parseInt(tail.join('')));
    }
  } else if (numString.length === 3) {
    if (tail.join('') === '00') { 
      return ones(head) + ' hundred';
    } else { 
      return ones(head) + ' hundred and ' + convert(parseInt(tail.join('')));
    }
  } else if (numString.length === 2) {
    if (head === '1') {
        return teens(tail[0]);
    } else { 
        return (tail.join('') === '0' ? tens(head) + '' : tens(head) + '-') + ones(tail[0]);
    }
  } else {
    return ones(head);
  }
};

module.exports = convert;
