

$(document).ready(function(){	
	let gameChoice = 0 
	$("#will").hide()
	$("#startPage").show()
	$("#coinGame").fadeOut()
	$("#guessNumber").fadeOut()


	$("#coin").click(function(){
		gameChoice = 1
		$("#coinGame").show()
		$("#startPage").fadeOut()
		$("#guessNumber").fadeOut()
	})

	$("#number").click(function(){
		gameChoice = 2
		$("#guessNumber").show()
		$("#startPage").fadeOut()
		$("#coinGame").fadeOut()
	})

	var gambleMoney = 50

	function getRand(min,max){
		return Math.floor(Math.random() *(max-min+1)+min)
	}

	let pickedNumber = getRand(1,10)
		console.log(pickedNumber)

	$("#placeBetButton").click(function(){
		
		var bet = parseInt($('#bet').val())
		if(bet<=0 || bet>gambleMoney || $('#bet').val()===""){
			alert("Must be within 1 and " + gambleMoney + " !")
		}
		else{
		var guess = parseInt($('#guess').val())
			if (guess<=0 || guess>10 || $('#guess').val()===""){
				alert("Guess must be between 1 and 10!")
			}else {
				if(gambleMoney > 0){
					if(guess === pickedNumber){
						$("#returnResult").text("Dang Clark, you guessed the number!")
						gambleMoney = (gambleMoney + bet)
						$("#currentAmount").text("" + gambleMoney + "")
						pickedNumber = getRand(1,10)
						console.log(pickedNumber)
						$("#moneyLeft").text("You have " + gambleMoney +" dollars left in your pocket!")
					} else {
						$("#returnResult").text("Wrong! You lose!")
						gambleMoney = (gambleMoney-bet)

						$("#currentAmount").text("" + gambleMoney + "")
						$("#moneyLeft").text("Clark, you have " + gambleMoney + " dollars in your pocket!")
							if(gambleMoney <= 0) {
								$("h1").text("GAME OVER CLARK GO HOME!")
								$("h1").css("padding","80px");
								$("h1").css("font-size","60px");
								$("h1").css("color","gold");
								$("h1").css("font-family","casinoShadow");
						

								$("#numberContain").fadeOut()
								$("#pick").fadeOut()
								$("#welcome").fadeOut()
								$("#currentAmount").fadeOut()
								$("#bet").fadeOut()
								$("#guess").fadeOut()
								$("#placeBetButton").fadeOut()
								$("#returnResult").text("Your're out of money Clark, the jig is up!")
								$("#moneyLeft").fadeOut()
								// $("#will").fadeIn()
								// $("#will").click(function(){
								// 	hide()})
							}
						}			
					}
				}
			}
		})
	})
			

$("#MainMenu").click(function(){
	location.reload()
})




    function coin(){
         return Math.random();
    }
    function toss(coin){
        if (coin > .5 ){
            $('#flip').text('heads!');
        } else if (coin <= .5) {
            $('#flip').text('tails!');
        } else{
            console.log('error');    
        }
    }
    $('#eddieButton').on('click', function(){
    	toss(coin());
    })
    $('#chevyButton').on('click', function() {
        toss(coin());
    });


