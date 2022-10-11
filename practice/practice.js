function func1(n1, n2) {
  if (n1 + n2 > 100) {
    return true;
  }
  return false;
}
console.log(func1(50, 60));
console.log(func1(70, 10));
console.log(func1(80, 300));

function func2(n1) {
  return n1 <= 0;
}
console.log(func2(0));
console.log(func2(5));
console.log(func2("-2"));

function func3(bool) {
  return !bool;
}
console.log(func3(true));
console.log(func3(false));

function func4(no1) {
  return no1 != 0;
}
console.log(func4(8));
console.log(func4("0"));
console.log(func4(null));

function func5(no1, no2) {
  return no1 % no2;
}
console.log(func5(14, 7));
console.log(func5(25, 7));
console.log(func5(53, 6));
console.log(func5(8, 9));

function odd(no1) {
  if (no1 % 2 != 0) {
    return "odd";
  } else {
    return "even";
  }
}
console.log(odd(5));
console.log(odd(16));

function isOdd(no1) {
  return no1 % 2 != 0;
}
console.log(isOdd(7));
console.log(isOdd(8));

function even(no1) {
  if (no1 % 2 == 0) {
    return 1;
  } else {
    return -1;
  }
}
console.log(even(6));
console.log(even(9));

// OR BY USING TERNARY OPERATOR

function even2(no1) {
  return no1 % 2 == 0 ? 1 : -1;
}
console.log(even2(88));
console.log(even2(77));

function logSub(log, sub) {
  return log === "LOGGED_IN" && sub === "SUBSCRIBED";
}
console.log(logSub("LOGGED_IN", "SUBSCRIBED"));
console.log(logSub("LOGGED_IN", "UNSUBSCRIBED"));
console.log(logSub("LOGGED_OUT", "UNSUBSCRIBED"));
console.log(logSub("LOGGED_IN", "Subscribed"));

function filterFalsy(v1, v2) {
  return !v1 ? v1 : v2;
}
console.log(filterFalsy(undefined, 85));
console.log(filterFalsy(0, 85));
console.log(filterFalsy(null, 85));
console.log(filterFalsy(false, 17));
console.log(filterFalsy(79, "ABC"));
console.log(filterFalsy(true, "ABC"));

function arrLength(arr) {
  console.log(arr.length);
  console.log(arr[arr.length - 1]);
}
arrLength([1, 5, 7, "edf"]);
arrLength([3, true, null, undefined, "abc"]);
arrLength([]);

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([2, 4, 6]));

function sumFac(no1) {
  let sum = 0;
  for (let i = 1; i <= no1; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumFac(4));
console.log(sumFac(5));
console.log(sumFac(600));

function time(sec) {
  let mm = Math.floor(sec / 60);
  let ss = sec % 60;
  if (mm.toString().length == 1) {
    mm = "0" + mm;
  }
  if (ss.toString().length == 1) {
    ss = "0" + ss;
  }
  return mm + ":" + ss;
}
console.log(time(72));
console.log(time(185));
console.log(time(712));

function lar(arr) {
  let l = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > l) {
      l = arr[i];
    }
  }
  return l;
}
console.log(lar([14, 8, -6]));
console.log(lar([-140, -80, -60]));

function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
console.log(reverseString("ABC"));
console.log(reverseString("It's a sentence."));

//  OR
{
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("ABC"));
  console.log(reverseString("It's a sentence."));
}

{
  function toZero(arr) {
    //  const arr2 = new Array;
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = 0;
      arr2.push(arr[i]);
    }
    return arr2;
  }
  console.log(toZero([5, 85, 24]));
}

//  OR
{
  function toZero(arr) {
    // return arr.map(value => {return 0;})
    // return arr.map(value => value = 0);
    // return arr.map(value => 0);
    return arr.map(() => 0);
  }
  console.log(toZero([5, 85, 24]));
}

//  OR
{
  arr = [5, 85, 24];
  console.log(arr.fill(0));
  console.log(arr.fill("a", 1, 2));
}

//  OR
{
  function toZero(arr) {
    // return arr.fill(0);
    return new Array(arr.length).fill(0);
  }
  console.log(toZero([5, 85, 24]));
}

{
  function removeApple(arr) {
    return arr.filter(value => value !== 'Apple');
  }
  console.log(removeApple(['Banana', 'Apple', 'Orange', 'Apple']));
}

//  OR
{
    function removeApple(arr) {
        const arr2 = [];
        for (i = 0; i < arr.length; i++) {
            if (arr[i] !== 'Apple') {
                arr2.push(arr[i]);
            }
        }
        return arr2;
    }
    console.log(removeApple(['Banana', 'Apple', 'Orange', 'Apple']));
}

//  OR
{
    function removeApple(arr) {
        for (i = 0; i < arr.length; i++) {
          if (arr[i] === 'Apple') {
            arr.splice(i, 1);
          }  
        }
        return arr;
    }
    console.log(removeApple(['Banana', 'Apple', 'Orange', 'Apple']));
}

{
    function filterFalsy(arr) {
        // return arr.filter(value => !!value === true);
        return arr.filter(value => value);
    }
    console.log(filterFalsy(['a', [], 'b', false, 0]));
    console.log(filterFalsy([1, null, 2, undefined, true]));
    console.log(filterFalsy(['x', '', 'y', NaN]));
}

{
    function toBoolean(arr) {
        // return arr.map(value => Boolean(value));
        return arr.map(value => !!value);
    }
    console.log(toBoolean(['a', 0, [], 3, true, null, '' ]))
}