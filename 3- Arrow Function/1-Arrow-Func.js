const add = (a, b) => a + b;

const add2Numbers = add(3, 2);
// console.log(add2Numbers);

// ------------------------

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => 2 * number);
// console.log(doubled);


// ------------------------


const team = {
    members: ['Muhammed', 'john'],
    teamName: 'Deadly squad',
    teamSummary: function () {
        // this === team
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`
        });
    }
}

console.log(team.teamSummary());
