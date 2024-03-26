function main(){
    sock = new WebSocket("ws://"+document.location.host+"/sock");
    sock.addEventListener("open", ()=>{ 
        document.getElementById("sendbutton").disabled=0
        console.log("SOCK IS OPEN");
    });
    sock.addEventListener("message", Spinny);

}

main();
function Spin(){

function random_number(minimum, maximum)
{
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}

let index = random_number(0, 37)
sock.send(index);
}
function Spinny(event)
{
let L = [0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 2, 10, 32, "00", 15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 23, 19, 5, 36];
let Red;
let Black;
let Even;
let Odd;
let color;
let even_or_odd;
let pass;
let fail;
let pass_or_fail;
let index = event.data;
if(index % 2 == 0)
{
    color = "Red";
}

else
{
    color = "Black";
}

if(L[index] === 0)
{
    even_or_odd = "Odd";
}

else if(L[index] === 19)
{
    even_or_odd = "Even";
}

else if(L[index] % 2 === 0)
{
    even_or_odd = "Even";
}

else
{
    even_or_odd= "Odd";
}

if(L[index] === 19)
{
    pass_or_fail = "pass";
}
else if(L[index] === "00")
{
    pass_or_fail = "pass";
}
else if(L[index] <= 18)
{
    pass_or_fail = "fail";
}

else
{
    pass_or_fail = "pass";
}

var row = table.insertRow(-1);

var insert_cell = row.insertCell(0);

insert_cell.innerHTML = L[index];

var insert_cell2 = row.insertCell(1);

insert_cell2.innerHTML = color;

var insert_cell3 = row.insertCell(2);

insert_cell3.innerHTML = even_or_odd;

var insert_cell4 = row.insertCell(3);

insert_cell4.innerHTML = pass_or_fail;

let chatbox = document.getElementById("chatbox");

chatbox.scrollTop = 99999999999;



}

