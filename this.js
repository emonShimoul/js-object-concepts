
const kibria = {
    id: 101,
    money: 5000,
    name: 'Kibria',
    treatArrow: () => {
        console.log(this);
    },
    treatInside: function(){
        const myArrow = () => console.log(this);
        myArrow();
    },
    treat: function(expense, tips, tax){
        this.money = this.money - expense - tips - tax;
        console.log(this);
        return this.money;
    }
}

function add(){
    console.log(this);
}

/*
What is window??
joto kichu JS e use kora hoy tar sobikchur main e ache window. eta browser er moddhe javascript execute korar ekta window deya ache. 

Arrow function ar regular normal function er ekta difference hoche j arrow function taar nijosso this er value taake hold korte parenaa se taar bairer mane outside e je ache taake dhore tar context use kore.

this keyword:
this hocche execution context. this er value bivinno jaygay bivinno rokom hoy. kar upr execute hocche tar upor etar value depend kore.

*/