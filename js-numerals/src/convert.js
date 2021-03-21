
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

const convert = (num) => {

    const numString = num.toString().split('');
    const [head, ...tail] = numString;

    if (numString.length > 3) {
    } else if (numString.length === 3) {
        return ones(head) + ' hundred and ' + convert(tail);
    } else if (numString.length === 2) {
        return tens(head) + tail === '0' ? '' : '-' + ones(tail);
    } else {
        return ones(head);
    }

};

module.exports = convert;
