var operator = "";
var currentNum = "";
var equation = "";
var numDisplay = "";
var prevNum;
var result;

function operatorButtons(x)
{
    operator = x;
    if(currentNum === "")
    {
        prevNum = 0;
    }
    else
    {
        prevNum = Number(currentNum);
    }
    document.getElementById("prevNum").innerText = prevNum;
    document.getElementById("operator").innerText = operator;
    currentNum = "";
    document.getElementById("currentNum").innerText = "";
}
function numbers(x)
{
    currentNum += x;
    document.getElementById("currentNum").innerText = currentNum;
}

function del()
{
    currentNum = currentNum.slice(0, -1);
    document.getElementById("currentNum").innerText = currentNum;
}

function divideOneByX()
{
    equation = `1/${num}`;
    
}

function square()
{
    equation = `${num}^2`;
}

function sqrt()
{
    equation = `√${num}`;
}

function switchSign()
{
    equation = `-${num}`;
}

function clear(){
    currentNum = ""
    document.getElementById("currentNum").innerText = "";
}

function equals()
{
    if(operator === "+")
    {
        equation = `${prevNum} + ${currentNum}`;
        result = prevNum + Number(currentNum)
        console.log(equation)
        console.log(result)
        document.getElementById("currentNum").innerText = result;
        document.getElementById("prevNum").innerText = equation;
        document.getElementById("operator").innerText = "";

    }
    else if(operator === "-")
    {

    }
    else if(operator === "*")
    {
        
    }
    else if(operator === "/")
    {
        
    }
    else
    {

    }
}