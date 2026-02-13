
//unshuffled deck

let deck: string[] = ['Actor', 'Actor', 'Actress', 'Actress', 'Builder','Builder','Pilot','Pilot','Spy','Spy','Farmer','Farmer','Old Maid','Zookeeper','Zookeper','Veterinarian','Veterinarian','Officer','Officer','Firefighter','Firefighter','Cook','Cook','Teacher','Teacher','Doctor','Doctor','Scientist','Scientist','Nurse','Nurse','Ballerina','Ballerina','Athlete','Athlete', 'Author', 'Author','Doctor','Doctor']


//blueprint of Player

class Player {   
    name: string;
    hand: string[];

 
    constructor(name: string,){
    this.name = name;
    this.hand = [];
  }

   addToHand() {  //function to draw a random card and push it player hand

	   let card = shuffledCardDeck.shift();
	   if (card) {
        this.hand.push(card);
        
    }
     
   }



}

// new player creation 

  const player1 = new Player('Tony')

  const player2 = new Player('Manny')

  const player3 = new Player('Lenny')



//shuffle algorithm 

const shuffle = (deck: string[]) => {
	for (let i = deck.length - 1; i--;) {

		const j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]];
	}

	return deck;
}

//An array of the newly shuffled deck -shuffledCardDeck
const shuffledCardDeck = shuffle(deck);



// player1.addToHand()  //adding random card to hand of player 1


function DealCards() {

  for (let i = shuffledCardDeck.length; i >= shuffledCardDeck.length; i--) {
    player1.addToHand();
    player2.addToHand();
    player3.addToHand();
  }
}



DealCards()

function playGame() {

console.log(player1.hand)
console.log(player2.hand) 
console.log(player3.hand)
  
}

playGame()
 