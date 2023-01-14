let Counter = 0 ;
let ss = document.getElementById("Counter");
let Saved = document.getElementById("last")
let clicked =0 ;


function Increment ()
{
    Counter+=1
    ss.innerText = Counter
}

function Save()
{   clicked +=1
    if (clicked == 1)
    {
        let Source = Saved.innerText
        Saved.innerText = Source  +"  "+ Counter
        Counter = 0
        ss.innerText = Counter
    }
    else {
        let Source = Saved.innerText
        Saved.innerText = Source + " - " + Counter
        Counter = 0
        ss.innerText = Counter
    }
}

//console.log(Counter)