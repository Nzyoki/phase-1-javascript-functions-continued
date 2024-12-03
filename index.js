function mondayWork(toDo="go to the office"){
    return `This Monday, I will ${toDo}.`;
}


function saturdayFun(toDo="roller-skate"){
    return `This Saturday, I want to ${toDo}!`;

}
function wrapAdjective(par="*"){
    return function(say="special"){
        return `You are ${par}${say}${par}!`;
    }
}

const encouragingPromptFunction = wrapAdjective("*");
console.log(encouragingPromptFunction("a hard worker"));
const encouragingPromptFunction2 = wrapAdjective("||");
console.log(encouragingPromptFunction2("a dedicated programmer"));