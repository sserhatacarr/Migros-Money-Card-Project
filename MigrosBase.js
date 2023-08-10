class MigrosBase {
    constructor(firstName, surName, isCard, products) {
        this.firstName = firstName;
        this.surName = surName;
        this.isCard = isCard;
        this.products = products;
    }

    calculate() {
        let amount = 0;
        if (this.checkProducts(this.products)) {
            if (this.isCard) {
                this.products.forEach(product => {
                    amount += product.price * 0.5;
                });
            } else {
                this.products.forEach(product => {
                    amount += product.price;
                });
            }
        } else {
            alert("You must buy at least one product.");
        }
        return amount;
    }

    checkProducts(products) {
        if (products != null && products.length > 0) {
            return true;
        }
        return false;
    }
}
