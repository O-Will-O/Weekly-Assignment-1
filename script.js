var operator = "";
var currentNum = "";
var equation = "";
var prevNum;
var result;
var prevKey = "";
var storedNum;
var storedAns;

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
    if(prevKey !== "" && test === 1)
    {
        currentNum = ""
    }
    currentNum += x;
    document.getElementById("currentNum").innerText = currentNum;
}

function decimal()
{
    currentNum += ".";
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
    operator = "";
    currentNum = "";
    equation = "";
    prevNum = 0
    result = ""
    prevKey = "";
    storedNum = ""
    storedAns = ""
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
    prevKey = "1/x";
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
    prevKey = "square";
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
    prevKey = "sqrt";
}

function switchSign()
{
    currentNum = -currentNum;
    console.log(currentNum)
    document.getElementById("currentNum").innerText = currentNum;
}
var test = 0
function equals()
{
    storedNum = Number(currentNum);
    storedAns = result;
    if(operator === "+")
    {
        if(prevKey === "+")
        {
            equation = `${storedAns} + ${storedNum}`;
            storedAns += storedNum
            document.getElementById("currentNum").innerText = storedAns;
            document.getElementById("equationDis").innerText = equation;
            let x = document.createElement("p")
            x.innerText = `${storedAns} + ${storedNum} = ${result}`;
            document.getElementById("history").appendChild(x)
            prevKey = "+"
            result = storedAns;
            test=1;
        }
        else if(prevKey !== "+" && prevKey !== "")
        {
            equation = `${storedAns} + ${storedNum}`;
            storedAns += storedNum
            document.getElementById("currentNum").innerText = storedAns;
            document.getElementById("equationDis").innerText = equation;
            let x = document.createElement("p")
            x.innerText = `${result} + ${storedNum} = ${storedAns}`;
            document.getElementById("history").appendChild(x)
            prevKey = "+"
            result = storedAns;
            test = 1;
        }
        else
        {
            equation = `${prevNum} + ${currentNum}`;
            result = prevNum + Number(currentNum)
            document.getElementById("currentNum").innerText = result;
            document.getElementById("equationDis").innerText = equation;
            let x = document.createElement("p")
            x.innerText = `${prevNum} + ${storedNum} = ${result}`;
            document.getElementById("history").appendChild(x)
            prevKey = "+"
            storedAns = result;
            test = 0
        }
    }
    else if(operator === "-")
    {
        if(prevKey === "-")
        {
            equation = `${result} - ${storedNum}`;
            storedAns -= storedNum
            document.getElementById("currentNum").innerText = storedAns;
            document.getElementById("equationDis").innerText = equation;
            let x = document.createElement("p")
            x.innerText = `${storedAns} - ${storedNum} = ${result}`;
            document.getElementById("history").appendChild(x)
            prevKey = "-"
            result = storedAns
            test = 1
        }
        else if(prevKey !== "-" && prevKey !== "")
        {
            equation = `${storedAns} - ${storedNum}`;
            storedAns -= storedNum
            document.getElementById("currentNum").innerText = storedAns;
            document.getElementById("equationDis").innerText = equation;
            let x = document.createElement("p")
            x.innerText = `${result} - ${storedNum} = ${storedAns}`;
            document.getElementById("history").appendChild(x)
            prevKey = "-"
            result = storedAns;
            test = 1
        }
        else
        {
            equation = `${prevNum} - ${currentNum}`;
            result = prevNum - Number(storedNum)
            document.getElementById("currentNum").innerText = result;
            document.getElementById("equationDis").innerText = equation;
            let x = document.createElement("p")
            x.innerText = `${prevNum} - ${storedNum} = ${result}`;
            document.getElementById("history").appendChild(x)
            prevKey = "-"
            storedAns = result;
            test = 0
        }
    }
    else if(operator === "*")
    {
        if(prevKey === "*")
        {
            equation = `${result} * ${storedNum}`;
            storedAns *= storedNum
            document.getElementById("currentNum").innerText = storedAns;
            document.getElementById("equationDis").innerText = equation;
            let x = document.createElement("p")
            x.innerText = `${storedAns} * ${storedNum} = ${result}`;
            document.getElementById("history").appendChild(x)
            prevKey = "*"
            result = storedAns;
            test = 1
        }
        else if(prevKey !== "*" && prevKey !== "")
        {
            equation = `${storedAns} * ${storedNum}`;
            storedAns *= storedNum
            document.getElementById("currentNum").innerText = storedAns;
            document.getElementById("equationDis").innerText = equation;
            let x = document.createElement("p")
            x.innerText = `${result} * ${storedNum} = ${storedAns}`;
            document.getElementById("history").appendChild(x)
            prevKey = "*"
            result = storedAns;
            test = 1
        }
        else
        {
            equation = `${prevNum} * ${storedNum}`;
            result = prevNum * Number(storedNum)
            document.getElementById("currentNum").innerText = result;
            document.getElementById("equationDis").innerText = equation;
            let x = document.createElement("p")
            x.innerText = `${prevNum} * ${storedNum} = ${result}`;
            document.getElementById("history").appendChild(x)
            prevKey = "*"
            storedAns = result;
            test = 0
        }
    }
    else if(operator === "÷")
    {
        if(prevKey === "÷")
        {
            equation = `${result} ÷ ${storedNum}`;
            storedAns = storedAns / storedNum
            document.getElementById("currentNum").innerText = storedAns;
            document.getElementById("equationDis").innerText = equation;
            let x = document.createElement("p")
            x.innerText = `${storedAns} ÷ ${storedNum} = ${result}`;
            document.getElementById("history").appendChild(x)
            prevKey = "÷"
            result = storedAns;
            test = 1
        }
        else if(prevKey !== "÷" && prevKey !== "")
        {
            equation = `${storedAns} ÷ ${storedNum}`;
            storedAns = storedAns / storedNum;
            document.getElementById("currentNum").innerText = storedAns;
            document.getElementById("equationDis").innerText = equation;
            let x = document.createElement("p")
            x.innerText = `${result} ÷ ${storedNum} = ${storedAns}`;
            document.getElementById("history").appendChild(x)
            prevKey = "÷"
            result = storedAns;
            test = 1
        }
        else
        {
            equation = `${prevNum} ÷ ${storedNum}`;
            result = prevNum / Number(storedNum)
            document.getElementById("currentNum").innerText = result;
            document.getElementById("equationDis").innerText = equation;
            let x = document.createElement("p")
            x.innerText = `${prevNum} ÷ ${storedNum} = ${result}`;
            document.getElementById("history").appendChild(x)
            prevKey = "÷"
            storedAns = result;
            test = 0
        }
    }
    else if(operator === "%")
    {
        if(prevKey === "%")
        {
            equation = `${result} % ${storedNum}`;
            storedAns = (storedAns/100) * storedNum;
            document.getElementById("currentNum").innerText = storedAns;
            document.getElementById("equationDis").innerText = equation;
            let x = document.createElement("p")
            x.innerText = `${storedAns} % ${storedNum} = ${result}`;
            document.getElementById("history").appendChild(x)
            prevKey = "%"
            result = storedAns;
            test = 1
        }
        else if(prevKey !== "%" && prevKey !== "")
        {
            equation = `${storedAns} % ${storedNum}`;
            storedAns = (storedAns/100) * storedNum;
            document.getElementById("currentNum").innerText = storedAns;
            document.getElementById("equationDis").innerText = equation;
            let x = document.createElement("p")
            x.innerText = `${result} % ${storedNum} = ${storedAns}`;
            document.getElementById("history").appendChild(x)
            prevKey = "%"
            result = storedAns;
            test = 1
        }
        else
        {
            equation = `${prevNum} % ${storedNum}`;
            result = (prevNum/100) * Number(storedNum)
            document.getElementById("currentNum").innerText = result;
            document.getElementById("equationDis").innerText = equation;
            let x = document.createElement("p")
            x.innerText = `${prevNum} % ${storedNum} = ${result}`;
            document.getElementById("history").appendChild(x)
            prevKey = "%"
            storedAns = result;
            test = 0
        }
    }
    else if(prevKey === "sqrt")
    {
        equation = `√${storedAns}`;
        result = Math.sqrt(storedAns);
        document.getElementById("currentNum").innerText = result;
        document.getElementById("equationDis").innerText = equation;
        let x = document.createElement("p");
        x.innerText = `√${storedAns} = ${result}`;
        document.getElementById("history").appendChild(x);
        prevKey = "sqrt";
        storedAns = result
        test = 1
    }
    else if(prevKey === "square")
    {
        equation = `${storedAns}^2`;
        result = Math.pow(storedAns, 2);
        document.getElementById("currentNum").innerText = result;
        document.getElementById("equationDis").innerText = equation;
        let x = document.createElement("p");
        x.innerText = `${currentNum}^2 = ${result}`;
        document.getElementById("history").appendChild(x);
        prevKey = "square";
        storedAns = result;
        test = 1
    }
    else if(prevKey === "1/x")
    {
        equation = `1/${storedAns}`;
        result = 1 / storedAns
        document.getElementById("currentNum").innerText = result;
        document.getElementById("equationDis").innerText = equation;
        let x = document.createElement("p");
        x.innerText = `1/${storedAns} = ${result}`;
        document.getElementById("history").appendChild(x);
        prevKey = "1/x";
        storedAns = result;
        test = 1
    }
}