function outerFunction(outervariable){
     return function innerFunction(innervariable){
        console.log('outer variable' + outervariable);
        console.log('inner variable'+ innervariable);
     }
}
const newFunction=outerFunction('outervariable');
newFunction('insidevariable')

//the idea behind closures are the inner function can use the variable in it outer functions mostly used in axioms or fetch ,to reuse the the parent variable in the mostly arrow functions