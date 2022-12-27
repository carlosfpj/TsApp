const prices: (number | string)[] = [1,2,2,3,4,5];


let user: [string, number, number?];

// user = ['nombre', 33];
// user = [];
// user = ['nico'];
// user = [12 , 'carlos'];


user = ['carlos', 33];
// user.push('otronombre');
user.push('fernando');

console.log(user);

console.log(user.at(-1));
console.log(user.at(-2));




const [username, age] = user;

console.log(username);
console.log(age);


