var returnResponse = "";

function scuberGreetingForFeet(distanceInFeet){
  // Write your code here!
	if (distanceInFeet > 2000) {
		returnResponse = 'No can do.';
	}
	else if (distanceInFeet > 1500) {
		returnResponse = 'I will gladly take your thirty bucks.';
	}
	else if (distanceInFeet <= 300) {
		returnResponse = 'This one is on me!';
	}
	return returnResponse;
}

function ternaryCheckCity(cityName){
  // Write your code here!
	cityName === 'NYC' ? returnResponse = 'Ok, sounds good.' : returnResponse = 'No go.';
	return returnResponse;
}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
	switch (tipAmount) {
		case 'generous' : returnResponse = 'Thank you so much.'; break;
		case 'not as generous': returnResponse = 'Thank you.'; break;
		default : returnResponse = 'Bye.';
	}
	return returnResponse;
}