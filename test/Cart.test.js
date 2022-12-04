const Cart = require('../src/Cart');
const Item = require('../src/Item');
const expect = require('chai').expect;

describe('Cart', () => {
    //Given that I visit the site, when I begin shopping, then I expect my cart to be empty.
    it('should initialize as empty', () => {
        //Arrange
        const cart = new Cart();
        //Assert
        expect(cart.items).to.deep.equal([])
        expect(cart.totalPrice).to.be.equal(0)
    });

    //Given I have an empty cart, when I add an Item, then I expect to see `totalPrice` reflect the sum of all the Items in my cart,
    // times the quantities of each item.
    it('should be the change of totalPrice after adding item depends on item quantity', ()=>{
        //Arrange
        const cart = new Cart();
        const item = new Item('Book',200,false);
        //Act
        cart.addItem(item,5);
        //Assert
        expect(cart.totalPrice).to.be.equal(1000);
    });

    //Given I have an empty cart, when I add more than one of an item, then I expect `itemQuantities()` to show the number of items I have added.
    it('should be return the quantity of items in cart', ()=>{
        //Arrange
        const cart = new Cart();
        const item1 = new Item('Book',200,false);
        const item2 = new Item('Toy',100,false);
        const item3 = new Item('Glass',500,true);
        const expected = ['Book - x2','Toy - x3','Glass - x1'];
        //Act
        cart.addItem(item1,2);
        cart.addItem(item2,3);
        cart.addItem(item3,1);
        //Assert
        expect(cart.itemQuantities()).to.deep.equal(expected);
    });

    //Given I have an empty cart, when I add items,
    // then I expect `itemizedList()` reflect the items I have added along with their price and quantity.
    it('should be return the list of item after adding items',()=>{
        //Arrange
        const cart = new Cart();
        const item1 = new Item('Book',200,false);
        const item2 = new Item('Toy',100,false);
        const item3 = new Item('Glass',500,true);
        const expected = ['Book - x2 - $200.00','Toy - x3 - $100.00','Glass - x1 - $500.00'];
        //Act
        cart.addItem(item1,2);
        cart.addItem(item2,3);
        cart.addItem(item3,1);
        //Assert
        expect(cart.itemizedList()).to.deep.equal(expected);
    });

    // Given I have an empty cart, when I add more than one of an item, then I expect `totalPrice` to reflect both the item price and quantity.
    it('totalPrice reflect with price and quantity', ()=>{
        //Arrange
        const cart = new Cart();
        const item1 = new Item('Book',200,false);
        const item2 = new Item('Toy',100,false);
        const item3 = new Item('Glass',500,true);
        //Act
        cart.addItem(item1,2);
        cart.addItem(item2,3);
        cart.addItem(item3,1);
        //Assert
        expect(cart.totalPrice).to.be.equal(1200);
    });
});