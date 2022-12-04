module.exports = class Cart {
     constructor()
    {
        this.items = [];
        this.totalPrice = 0;
    }

    addItem(item,quantity){
        this.items.push({
            itemName : item.name,
            price: item.price,
            quantity: quantity,
            onSale : item.onSale
        });
        this.totalPrice += item.price * quantity;
    }
}
 