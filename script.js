var operator = "";
var currentNum = "";
var equation = "";
var numDisplay = "";
var prevNum;



function operatorButtons(x)
{
    operator = x;
}
function numbers(x)
{
    num.push(x);
}

function del()
{
    currentNum.pop();
}

function divideOneByX()
{
    equation = `1/${num}`;
    
}