// const myReg = /^\d+$/;
// console.log(myReg.test("hello"));
// console.log(myReg.test(12345));
// console.log(myReg.test("12345"));
// console.log(myReg.test("abc3456"));


//Finally, here is your challenge. In the JS section of this Codepen, write a regex test such that 
//only a username that has alphanumeric characters (lower and upper case letters and numbers allowed only - no spaces, no underscores), has at minimum 2 characters, and has a number as the final character (such as 'Jason1') is accepted via the form below:
const myReg2 = /([A-Z0-9a-z]{1,})\d$/;
const string1= 'jAsOn1';
const string2 = 23;
const string3 = '1JASON1';

const fail1 ='jAsOn_1';
const fail2 = '1jason';
const fail3 = 1;

console.log(!myReg2.test(string1));
console.log(myReg2.test(string2));
console.log(myReg2.test(string3));

console.log(myReg2.test(fail1));
console.log(myReg2.test(fail2));
console.log(myReg2.test(fail3));