const kibria = {
    id: 101,
    money: 5000,
    name: 'Kibria',
    treat: function(expense, tips, tax){
        this.money = this.money - expense - tips - tax;
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

// call
kibria.treat.call(adam, 500, 100, 50);
kibria.treat.call(adam, 200, 50, 20);

// apply
kibria.treat.apply(john, [500, 100, 50]);
kibria.treat.apply(john, [700, 150, 70]);

/*
bind, call, apply egular kaj e hocche onno kno ekta object er moddhe kno ekta method ache sei method ta ami onno arekta object er jonne use korbo. to use korte gele bind hocche oi function taake bind kore notun ekta function create kore ar setaake call kore kore use korte hoy.

call hocche sorasori call korte hbe. call korte gele oi j function taake call korbo setaa j object er jonne call korbo setake 1st parameter hisebe dite hbe ar baki j parameter gula ache setaake comma seperation kore kore dite hbe.

apply er khetre hocche 1st parameter hisebe notun j object er upr apply korbo setaa dite hbe ar baki parameter gula ekta array er moddhe dite hbe. 
*/