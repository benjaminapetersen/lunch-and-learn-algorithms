const assert = {
  equals: (a,b) => {
    if(JSON.stringify(a) !== JSON.stringify(b)) {
      console.error(a, 'does not equal', b);
    }
  }
}


/**
 * @param {number} x
 * @return {number}
 */
// reverse(x:number): number
var reverse = function(x) {
  let tmp = (''+x).split('');
  let sign = '';
  if(tmp[0] === '-') {
    tmp.shift();
    sign = '-';
  }
  
  return Number(sign + tmp.reverse().join(''));
};




assert.equals(reverse(123), 321);
assert.equals(reverse(568), 865);
assert.equals(reverse(-42), -24);