type CartItem = { name: string; price: number };

export class ShoppingCart {
  private items: { [id: string]: number } = {};

  addItem(id: string, quantity: number): void {
    if (this.items[id]) {
      this.items[id] += quantity;
    } else {
      this.items[id] = quantity;
    }
  }

  removeItem(id: string): void {
    delete this.items[id];
  }

  getItems(): { [id: string]: number } {
    return { ...this.items };
  }

  clear(): void {
    this.items = {};
  }

  getTotalItems(): number {
    return Object.values(this.items).reduce(
      (total, quantity) => total + quantity,
      0
    );
  }

  isEmpty(): boolean {
    return Object.keys(this.items).length === 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Cart is empty. Cannot proceed to checkout.');
      return;
    }
    console.log('Proceeding to checkout with items:', this.getItems());
    this.clear();
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem('apple', 2);
shoppingCart.addItem('banana', 3);
shoppingCart.addItem('orange', 4);

console.log(shoppingCart.getItems());

console.log(shoppingCart.getTotalItems());

export default shoppingCart;
