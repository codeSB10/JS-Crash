let x = 5;
console.log(x);
let y, z;
y = x + 3;
z = x ** y; //Exponentiation
console.log(z);
x += y; //Same as x=x+y (An assignment operator)
console.log(x)
y++; //Increment (An arithmetic operator)
console.log(y);

console.log('Susan'[0])
console.log('Hello World'[10])
let text = "Susan"
console.log(text[text.length - 1])
console.log(null)
console.log(undefined)

let celsius = 100;
let fahrenheit = celsius * 1.8 + 32;
console.log(celsius + ' degC = ' + fahrenheit + ' degF')

let check = '3' == 3;
console.log(check);
let $check = '3' === 3;
console.log($check);
let _check = '3' != 6 / 2;
console.log(_check);
let _check1 = '3' !== 3;
console.log(_check1);
let check2 = !true;
console.log(check2);

console.log(5 === '5');
console.log(5 == 10 / 2);

let time = 8;

if (time === 12) {
    greeting = "Good noon"
} else {
    greeting = "Good day"
}

console.log(greeting);

let hour = 23;

if (hour === 12) {
    greet = "Good noon!"
}
else if (hour < 12) {
    greet = "Good morning!"
}
else if (hour > 20) { 
    greet = "Good evening!"
}
else {
    greet = "Good afternoon!"
}

console.log(greet)

let money, price, change, owe; 
money = 50, price = 80;
change = money - price;

if (money === price) {
    console.log("You paid the amount.")
}
else if (money > price) {
    console.log ("Your change is Rs." + change + ".")
}
else {
    console.log("You still owe Rs." + -change + ".")
}

let no1 = 16, no2 = 25;
console.log(`Sum = ${no1 + no2}`);

let abc = ""; //To check whether the value is falsy or truthy
console.log(!!abc);

let grade = 11;
(grade >= 9) ? console.log("In high school") : console.log("In school")

let age = 20;
let status = (age < 18) ? "Child" : "Adult";
console.log(status);

let day = "Sunday", time1 = 16;
let movie = (day === "Sunday" && time1 >= 10 && time1 <= 14)? "Running" : "Not Running";
console.log(movie);

let count = 1;
while (count <= 5) {
    console.log(count);
    //count = count + 1;
    count++
}

for (let i = 100; i >= 95; --i) {
    console.log(i);
}

for (i = 1; i <= 15; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + " -> Divisible by 3 & 5")
    }
    else if (i % 3 == 0) {
        console.log(`${i} -> Divisible by 3`)
    }
    else if (i % 5 == 0) {
        console.log(`${i} -> Divisible by 5`)
    }
    else {
        console.log(i + " -> " + i)
    }
}

const name$ = "AB XY";
for (let i = 0; i < name$.length; i++) {
    console.log(name$[i]);
}

function sum(a, b) {
    return a + b;
}

console.log(sum(16, 4));

function diff(a, b) {
    console.log(a - b);
}
diff(10, 16);

const cTOf = function(C) {
    F = C * 1.8 + 32;
    return C + " degC = " + F + " degF";
}

console.log(cTOf(100));
console.log(cTOf(40));
console.log(cTOf(-40));

const fTOc = (F) => {
    return F + " degF = " + 5 * (F - 32) / 9 + " degC"
}

console.log(fTOc(212));
console.log(fTOc(100));
console.log(fTOc(-40));

let numb = [5, 10, 15, 20, 25];
console.log(numb[numb.length - 1]);

numb.push(30);
console.log(numb);

let numb1 = numb.filter((val) => { //Function inside array.filter()
    console.log(val);
    if (val < 20) {
        return true;
    }
})
console.log(numb1);

let numb2 = numb.filter(val => {return val > 20});
console.log(numb2);

let grades = ['A+', 'A', 'FAIL', 'FAIL'];
let grd = grades.filter(element => element === 'FAIL');
console.log(grd);

for (let i = 0; i < grades.length; i++) {
    console.log(grades[i])
}

let grd2 = [];
for (let i = 0; i < grades.length; i++) {
    if (grades[i] !== 'FAIL') {
        grd2.push(grades[i]);
    }
}
console.log(grd2);

{
    const numb = [1, 3, 4, 5];
    const numb1 = numb.map((func_sq));
    function func_sq(value) {
        return value ** 2
    }
    console.log(numb1);
    
    // OR
    const numb2 = numb.map(value => value ** 2);
    console.log(numb2);

    //OR (WITHOUT USING map())
    const numb3 = [];
    for (i = 0; i < numb.length; i++) {
        numb3.push(numb[i] ** 2)
    }
    console.log(numb3);
}

const user = [
    {
        firstName : "Ram",
        lastName : "Owen",
        email : "ram@gmail.com",
        password : "ram123"
    },
    {
        firstName : "Shyam",
        lastName : "Keane",
        email : "shyam@gmail.com",
        password : "shyam123"
    },
    {
        firstName : "Hari",
        lastName : "Kane",
        email : "hari@gmail.com",
        password : "hari123"
    }
]

function userAdd (userNew) {
    user.push(userNew);
}

userAdd({
    firstName : 'Rohan',
    lastName : 'Oliver', 
    email : 'rohan@gmail.com', 
    password : 'rohan123'
})

console.log(user);

function login(email, password) {
    for (i = 0; i < user.length; i++) {
        if (user[i].email === email) {
            if (user[i].password === password) {
                console.log('User logged in')
            }
            else {
                console.log('Password Incorrect')
            }
            return;
        }
    }
    console.log('Email doesn\'t match');
}

login('shyam@gmail.com', 'shyam123');
login('hari23@gmail.com', 'hari123');
login('rohan@gmail.com', 'rohan321');

document.querySelector('h1').innerHTML += ": Console & DOM";
document.querySelector('h1').style.color = '#f0f';

function btnFunc() {
    document.querySelector('h1').style.color = 'red';
    console.log('clicked button');
}

function toggleDarkMode() {
    document.querySelector('body').classList.toggle('dark-theme');
}