class Card {
	constructor(text) {
		this.text = text
		this.cards = []
	}
}

class List {
  constructor(title) {
    this.title = title;
  }

  addCard(text) {
  	var card = newCard(text)
  	this.cards.push(card)
  }
}