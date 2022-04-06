const student = {
    id: 101,
    money: 5000,
    name: 'Kibria',
    major: 'mathematics',
    isReach: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function(){
        console.log(this.name, 'taking exam');
    },
    treat: function(expense, tips){
        this.money = this.money - expense - tips;
        return this.money;
    }
}

student.takeExam();
const remaining1 = student.treat(900, 100);
const remaining2 = student.treat(500, 50);
console.log(remaining2);