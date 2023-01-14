
    let sum = 0
    let hasBlackJack = false
    let isAlive =false
    let cards = []
    let message = ""
    let show_message = document.getElementById("massege-id")
    let player = {
        Name : "Per", 
        Chips : 145 
    }
    
    document.querySelector("#Per-id").textContent = player.Name + ": $" + player.Chips
    
    function Startgame()
    {   if(isAlive===false && hasBlackJack===false){
            isAlive =true
            let firstCard = getRandomCard()
            let secoundCard = getRandomCard()
            cards.push(firstCard)
            cards.push(secoundCard)
            sum = firstCard + secoundCard
            Rendergame()
        }
    }
    function Newgame()
    {
        isAlive =false 
        hasBlackJack = false 
        cards=[]
        message = ""
        sum = 0
        Startgame()

    }
    function Rendergame()
    {
        document.querySelector("#Sum-id").textContent = "Sum:  " + sum
        document.querySelector(".Card-class").textContent = "Cards: " 
        for(let i =0 ; i<cards.length;i++)
        {   
            document.querySelector(".Card-class").textContent += cards[i] + " " 

        }
        if (sum<= 20)
        {
            message = "Do you want to drow a new Card ? "
        }
        else if(sum===21)
        {
            message ="wahooo!! , You,ve got Blackjack !"
            hasBlackJack =true
            cards = []

        }
        else
        {
            message = "You are out of the game !"
            isAlive =false
            cards=[]

        }
        show_message.textContent= message
    }
   function Newcard()
   {
    if(isAlive === true && hasBlackJack === false)
    {
         let Card = getRandomCard()
         sum+=Card
         cards.push(Card)
         console.log("hi")
         Rendergame()
    }
    else {

    }

   }
   function getRandomCard()
   {
    let Dice =Math.floor(Math.random()*13) + 1 
    if(Dice=== 1)
    {
        return 11
    }
    else if (Dice > 10)
    {
        return 10
    }
    else {
        return Dice
    }
   }