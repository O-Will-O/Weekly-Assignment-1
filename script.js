var operator = "";
var currentNum = "0";
var equation = "";
var numDisplay = "";
var prevNum;
document.getElementById("currentNum").innerText = currentNum;


function operatorButtons(x)
{
    operator = x;
    prevNum = currentNum;
    document.getElementById("prevNum").innerText = prevNum;
    document.getElementById("operator").innerText = operator;
    currentNum = 0;
    document.getElementById("currentNum").innerText = currentNum;
}
function numbers(x)
{
    currentNum += x;
    document.getElementById("currentNum").innerText = currentNum;
}

function del()
{
    currentNum.pop();
}

function divideOneByX()
{
    equation = `1/${num}`;
    
}