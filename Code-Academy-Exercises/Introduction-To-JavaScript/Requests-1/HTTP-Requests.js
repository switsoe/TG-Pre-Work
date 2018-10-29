console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');


//the setTimeout function always runs last, so the time might make it render imperceivably faster, but still last