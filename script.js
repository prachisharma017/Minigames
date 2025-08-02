function Roll(){
    let x = Math.floor(Math.random()*6)+1;
    document.querySelector('#o1').innerHTML = `<image src=images/${x}.jpg width=15%>`;
}
function OTP(){
    let x = Math.floor(Math.random()*(999999-100000+1))+100000;
    document.querySelector('#o2').innerText = x;
}
function Dinner(){
    let menu = ['idli','dosa','momos','pasta','chole chawal','rajma-chaval','khicdi','dal chaval','kadi chaval','Puri sabzi','raita paratha','dhokla','methi paratha'];
    let l = menu.length;
    let x = Math.floor(Math.random()*l)+0;
    document.querySelector('#o3').innerText = menu[x];
}
function RPS(user){
    let comp = Math.floor(Math.random()*(3-1+1))+1;
    if(comp == user){
        document.querySelector('#o4').innerText = "Tie";
    }
    else if((user==1 && comp==2) || (user==3 && comp==2) || (user==2 && comp==3)){
        document.querySelector('#o4').innerText = "Computer Win";
    }
    else{
        document.querySelector('#o4').innerText = "User Win";
    }
    
}
function Quotes(){
    let quote = ['The way to get started is to quit talking and begin doing. -Walt Disney',
                'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela'];
    let l = quote.length;
    let x = Math.floor(Math.random()*l)+0;
    document.querySelector('#o5').innerText = quote[x];
}
function password(){
    let d = Math.floor(Math.random()*(99-10+1))+10;
    let c1 = Math.floor(Math.random()*(122-97+1))+97;
    let c2 = Math.floor(Math.random()*(122-97+1))+97;
    let c3 = Math.floor(Math.random()*(122-97+1))+97;
    let s = Math.floor(Math.random()*(47-33+1))+33;
    document.querySelector('#o6').innerHTML = String.fromCharCode(c1)+s+d+String.fromCharCode(c2)+String.fromCharCode(c3);
}

function GTN() {
    let comp_num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    let user_num = parseInt(document.querySelector("#input-num").value);

    if (user_num > 100 || user_num < 1 || isNaN(user_num)) {
        document.querySelector("#o7").innerHTML = "Enter a valid number between 1 and 100";
        return;
    }

    
    for(let i = 10 ; i>=0 ; i--) {
        if (user_num == comp_num) {
            document.querySelector("#o7").innerHTML = "You Won!";
        } 
        else {
            document.querySelector("#chance").innerHTML = `You Have ${i} Chances`;
            document.querySelector("#o7").innerHTML = "Try Again";

            if (i == 0) {
                document.querySelector("#o7").innerHTML = `You Lose. The correct number was ${comp_num}`;
            }
        }
        
    }
}