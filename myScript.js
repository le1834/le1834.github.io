function temperaturebug()
{

    var temp = Number(document.project1.input1.value);


    if (temp >= 80)
    {
        document.getElementById('weather').src = "img/summer.jpg "  ;
        return "Summer"

    }
    if (temp >= 70)
    {
        document.getElementById('weather').src = " img/spring.jpg";
        return "Spring"
    }
    if (temp >= 40)
    {
        document.getElementById('weather').src = "img/autmn.JPG";
        return "Autumn"
    }
    if (temp >= 30)
    {
        document.getElementById('weather').src = "img/winter.jpg";
        return "Winter"
    }
    else
    {
        return "Too high/low";
    }
}





function assignGrade()
{
    var score = Number(document.project3.input1.value);
    if (score >= 100)
    {
        return "A+";
    }
    else if (score >= 93)
    {
        return "A";
    }
    else if (score >= 90)
    {
        return "A-";
    }
    else if (score >= 88)
    {
        return "B+";
    }
    else if (score >= 83)
    {
        return "B";
    }
    else if (score >= 80)
    {
        return "B-";
    }
    else if (score >= 78)
    {
        return "C+";
    }
    else if (score >= 73)
    {
        return "C";
    }
    else if (score >= 70)
    {
        return "C-";
    }
    else if (score >= 68)
    {
        return "D+";
    }
    else if (score >= 63)
    {
        return "D";
    }
    else if (score >= 60)
    {
        return "D-";
    }
    else if (score >= 58)
    {
        return "F+";
    }
    else if (score >= 53)
    {
        return "F";
    }
    else if (score >= 50)
    {
        return "F-";
    }
    else
    {
        return "NO CREDIT!!!";
    }
}
function calCount()
{
    var activity = document.getElementById('workList').value;
    var cal = Number(document.getElementById('long').value);

    if (activity == 'eating')
    {
        return cal * -2;
    }
    else if (activity == 'studying')
    {
        return cal * 1.5;
    }
    else if (activity == 'swimming')
    {
        return cal * 3;
    }
    else (activity == 'running')
    {
        return cal * 4;
    }
}


function smallToTen(num, base)
{
    num = Number(document.XY.num1.value);
    base = Number(document.XY.base.value);
    tenNum = 0;
    numLength = num.toString().length;
    while(numLength > 0)
    {
        var denominator = Math.pow(10, (numLength-1));
        var currentDigit = Math.floor(num/denominator);
        tenNum = tenNum +currentDigit*Math.pow(base, numLength-1);
        num = num%denominator;
        numLength--;
    }
    return tenNum;
}
function tenToSmall(num, base)
{
    num = tenNum;
    base = Number(document.XY.wantedbase.value);
    smallNum = "";

    while (num > 0)
    {
        smallNum = num%base + smallNum;
        num = Math.floor(num/base);
    }
    return smallNum;

}

function XtoY()
{
    var num = smallToTen();
    var base = Number(document.XY.wantedbase.value);
    return tenToSmall(num, base)
}

function calculate(expression)
{
    var firstNum = Number(expression.substr(0,1));
    var operator = expression.substr(1,1);
    var secondNum = Number(expression.substr(2,1));
    if (operator === '+')
    {
        return addNums(firstNum, secondNum);
    }
    else if (operator === '-')
    {
        return subtractNums(firstNum, secondNum);
    }
    else if (operator === '*')
    {
        return timesNums(firstNum, secondNum);
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum);
    }
    else if (operator === '^')
    {
        return powerNums(firstNum, secondNum);
    }
}

function addNums(p1,p2)
{
    return p1 + p2;
}

function subtractNums(p1,p2)
{
    return p1 - p2;
}

function divideNums(p1,p2)
{
    return p1 / p2;
}

function timesNums(p1,p2)
{
    return p1 * p2;
}

function backSpace()
{
    var back = document.calculator.calcWindow.value;
    var length = back.length-1;

    return back.substr(0, length);
}

function powerNums(p1,p2)
{
    document.getElementById("pow").innerHTML = Math.pow(num1,num2);
}


var feedback=[];
function checkAnswers()
{
    var score=0;
    var Q4Answer = document.quiz.a4.value.toLowerCase();
    var Q1Answer = document.quiz.a1.value.toLowerCase();
    if (Q1Answer === 'aquaman')
    {

        score++;
    }
    else
    {
        feedback.push(" Q1 was Aquaman!")
    }


    if (document.quiz.a2.value === 'Penguin')
    {
        score++;

    }
    else
    {
        feedback.push(" Q2 was Penguin!");
    }


    if (document.quiz.a3A.checked === true && document.quiz.a3C.checked === true && document.quiz.a3D.checked === false && document.quiz.a3B.checked === false && document.quiz.a3E.checked === false)
    {
        score++;

    }
    else
    {
        feedback.push(" Q3 was Math and Science!");
    }
    if (Q4Answer === 'you')
    {

        score++;
    }
    else
    {
        feedback.push(" Q4 was YOU!")
    }
    if (document.quiz.a5.value === 'Fettuccine Alfredo')
    {
        score++;

    }
    else
    {
        feedback.push(" Q5 was Fettuccine Alfredo!");
    }
    if (document.quiz.a6A.checked === true && document.quiz.a6C.checked === true && document.quiz.a6D.checked === true && document.quiz.a6B.checked === true && document.quiz.a6E.checked === true && document.quiz.a6F.checked === true)
    {
        score++;

    }
    else
    {
        feedback.push(" Q6 was all of them!");
    }
    return score;

}
function IDC()
{
    return feedback
}