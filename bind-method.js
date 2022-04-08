const kibria = {
    id: 101,
    money: 5000,
    name: 'Kibria',
    treat: function(expense){
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}

const adam = {
    id: 102,
    money: 7000,
    name: 'Adam Smith'
}

const john = {
    id: 103,
    money: 8000,
    name: 'John Doe'
}

kibria.treat(100);
kibria.treat(400);

const adamTreat = kibria.treat.bind(adam);
const johnTreat = kibria.treat.bind(john);
adamTreat(500);
adamTreat(300);
adamTreat(800);
kibria.treat(300);
johnTreat(1500);