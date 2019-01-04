const createBookShop = (inventory) => {
	return {
		inventory,
		inventoryValue() {
			return this.inventory.reduce((total, book) => total + book.price, 0);
		},
		priceForTitle(title) {
			return this.inventory.find(book => book.title === title).price;
		}
	};
}

const inventory = [
	{ title: 'Harry Potter', price: 12 },
	{ title: 'Javascript secrets', price: 15 },
	{ title: 'python secrets', price: 40 },
	{ title: 'css secrets', price: 20 },
	{ title: 'php secrets', price: 33 },

];


const bookShop = createBookShop(inventory);

// console.log(bookShop);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('python secrets'));
