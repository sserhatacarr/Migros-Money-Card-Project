let message = `
Welcome Migros 
Do you have money card ?
1- Yes
2- No
`;

const products = [
    {
        productName: "Milk",
        price: 20
    },
    {
        productName: "Baby Food",
        price: 100
    },
    {
        productName: "Beef",
        price: 220

    }


]

let conclusion = confirm(message);
let amount;

if (conclusion) {
    // have a card.
    let name = prompt("Please write your name : ");
    let surName = prompt("Please write your surname : ");

    const costumer = new Costumer(name, surName, conclusion, products);
    amount = costumer.calculate();

    alert(`Costumer Info : ${name} ${surName}
            Amount : ${amount}

    `);
}
else {
    const costumer = new Costumer(null, null, conclusion, products);
    amount= costumer.calculate();
    alert (`Amount : ${amount}`)
}