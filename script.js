var operator = "";
var currentNum = "";
var equation = "";
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
    document.getElementById("equationDis").innerText = prevNum + x;
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

function ce()
{
    currentNum = "";
    document.getElementById("currentNum").innerText = "";
}

function c()
{
    currentNum = "";
    document.getElementById("equationDis").innerText= "";
    document.getElementById("currentNum").innerText = "";
}

function divideOneByX()
{
    equation = `1/${currentNum}`;
    result = 1 / Number(currentNum)
    document.getElementById("currentNum").innerText = result;
    document.getElementById("equationDis").innerText = equation;
    let x = document.createElement("p");
    x.innerText = `1/${currentNum} = ${result}`;
    document.getElementById("history").appendChild(x);
}

function square()
{
    equation = `${currentNum}^2`;
    result = Math.pow(Number(currentNum) , 2);
    document.getElementById("currentNum").innerText = result;
    document.getElementById("equationDis").innerText = equation;
    let x = document.createElement("p");
    x.innerText = `${currentNum}^2 = ${result}`;
    document.getElementById("history").appendChild(x);
}

function sqrt2()
{
    equation = `√${currentNum}`;
    result = Math.sqrt(Number(currentNum));
    document.getElementById("currentNum").innerText = result;
    document.getElementById("equationDis").innerText = equation;
    let x = document.createElement("p");
    x.innerText = `√${currentNum} = ${result}`;
    document.getElementById("history").appendChild(x);
}

function switchSign()
{
    currentNum = -currentNum;
    console.log(currentNum)
    document.getElementById("currentNum").innerText = currentNum;
}

function equals()
{
    if(operator === "+")
    {
        equation = `${prevNum} + ${currentNum}`;
        result = prevNum + Number(currentNum)
        document.getElementById("currentNum").innerText = result;
        document.getElementById("equationDis").innerText = equation;
        let x = document.createElement("p")
        x.innerText = `${prevNum} + ${currentNum} = ${result}`;
        document.getElementById("history").appendChild(x)
    }
    else if(operator === "-")
    {
        equation = `${prevNum} - ${currentNum}`;
        result = prevNum - Number(currentNum)
        document.getElementById("currentNum").innerText = result;
        document.getElementById("equationDis").innerText = equation;
        let x = document.createElement("p")
        x.innerText = `${prevNum} - ${currentNum} = ${result}`;
        document.getElementById("history").appendChild(x)
    }
    else if(operator === "*")
    {
        equation = `${prevNum} * ${currentNum}`;
        result = prevNum * Number(currentNum)
        document.getElementById("currentNum").innerText = result;
        document.getElementById("equationDis").innerText = equation;
        let x = document.createElement("p")
        x.innerText = `${prevNum} * ${currentNum} = ${result}`;
        document.getElementById("history").appendChild(x)
    }
    else if(operator === "÷")
    {
        equation = `${prevNum} ÷ ${currentNum}`;
        result = prevNum / Number(currentNum)
        document.getElementById("currentNum").innerText = result;
        document.getElementById("equationDis").innerText = equation;
        let x = document.createElement("p")
        x.innerText = `${prevNum} ÷ ${currentNum} = ${result}`;
        document.getElementById("history").appendChild(x)
        console.log(result)
    }
    else if(operator === "%")
    {
        equation = `${prevNum} % ${currentNum}`;
        result = (prevNum/100) * Number(currentNum)
        document.getElementById("currentNum").innerText = result;
        document.getElementById("equationDis").innerText = equation;
        let x = document.createElement("p")
        x.innerText = `${prevNum} % ${currentNum} = ${result}`;
        document.getElementById("history").appendChild(x)
    }
    else
    {

    }
}