const Cart = require('../src/Cart.js');
const expect = require('chai').expect;

describe('Cart', () => {
    //Given that I visit the site, when I begin shopping, then I expect my cart to be empty.
    it('should initialize as empty', () => {
        const cart = new Cart();
        expect(cart.items).to.deep.equal([])
        expect(cart.totalPrice).to.be.equal(0)
    });
});