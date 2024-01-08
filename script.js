var score = 0;
var hitrn = 0;




function making()
{
 var store = '';

for( var i =1 ; i<=100 ; i++)
{
    var x = Math.floor(Math.random()*10);
    store += `<div class="box">${x}</div>`;
}

document.querySelector(".bottom").innerHTML = store;

}



var timing = 50;

function run()
{
    var t = setInterval(function()
    {
        if(timing > 0)
        {
        timing --;
        document.getElementById('timer').textContent = timing;
        }

        else 
        {
            clearInterval(t);
            document.querySelector('.bottom').innerHTML = `<h1>Game over now Start Again to play this</h1>`;
        }
    }
    ,1000);

}




function hit ()
{
  hitrn = Math.floor(Math.random()*10);
  document.querySelector('#hits').innerHTML = hitrn;

}

var scored = '';

function increasescore()
{
 
   scored +=10;

    document.querySelector("#s").textContent = scored ;
}



var decscore = '';
function decresescore()
{
 
     decscore -=10;

    document.querySelector("#ds").textContent = decscore ;
}

// event bubbling.

document.querySelector(".bottom").addEventListener( 'click' , function(data)
{

    // console.log(data.target);
    var done = Number(data.target.textContent);
    if(done === hitrn)
    {
        increasescore();
        making();
        hit();
    }
    else
    {
        decresescore();
    }


});


hit();
run();
making();
 