
var lastnum  ;
var num ;
function quotesrandom() {
    var username = ["-- Albert Einstein","--Frank Zappa","--Oscar Wilde","--Elbert Hubbard", "--Epictetus", "--Wayne Gretzy", "--Frank Sinatra","--Nelson Mandela"]
    var text = [`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,`"So many books, so little time.”"`,`"Be yourself; everyone else is already taken."`,`"Do not take life too seriously. You will not get out alive."`,`"It's not what happens to you, but how you react to it that matters."`, `"You miss 100% of the shots you don't take."`, `"The best revenge is massive success."`, `"Resentment is like drinking poison and waiting for your enemies to die."`]

      num = Math.floor(Math.random() * username.length);
    
    if(lastnum == num){
        quotesrandom();
    }
    
    else{
    document.getElementById("namequotes").innerHTML = username[num];
    document.getElementById("textquotes").innerHTML = text[num];
    }

    lastnum = num ;
   
}


 
//============================================================================================

// (9)
// for (var x =Number(window.prompt("enter Number")) ; x >= 1 ; x -=1 ){
// console.log(x);
// }


// (10)
// var n =Number(window.prompt("enter Number"))
// for (var x = 1 ; x <= 12 ; x +=1 ){
//     console.log(n * x);
//     }


//(11)
// var x =Number(window.prompt("enter Number"))
// for ( var i = 2; i < x ; i+=2 ){
//     console.log(i);
//     }



//(12)
// var num =Number(window.prompt("enter Number"))
// var power=Number(window.prompt("enter power"))
// var x=1
// for(var i= 1 ;  i <=power ;i++ ){
//    console.log( x*=num);
// }