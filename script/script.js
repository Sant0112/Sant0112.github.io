
function showMessage()
{
    let name = "James";
    let age = 21;
    let bonus = age + 5;
    let school = "SADT";
    let message = "Hey "+ name+", your age is " + age
    +" You are qualified to be at "+ school +". You have got a bonus of " + bonus
    alert(message);
}

function checkAge()
{
    let age = 17;
    if (age>=18)
    {
        alert("Hey you can drive. You are old enough!")

    }
    else
    {
        alert("Hey, you are too young.")
    }
}

function showMany()
{
    for(let i=1;i<=10;i=i+1)
    {
        alert("Don't close me!")
    }
}


    function changeToCat()
    {
        document.getElementById("catdog").src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
    }


function changeToDog()
{
    document.getElementById("catdog").src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg"
}
