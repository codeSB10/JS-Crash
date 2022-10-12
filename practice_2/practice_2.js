console.log("JS Advanced Challenges");

{
  function showRating(rating) {
    let r = "";
    for (let i = 0; i < Math.trunc(rating); i++) {
      r += "*";
      if (i !== rating - 1) {
        r += " ";
      }
    }
    if (!Number.isInteger(rating)) {
      r += ".";
    }
    return r;
  }
  console.log(showRating(4));
  console.log(showRating(4.5));
  console.log(showRating(3.5));
}

{
  function ascending(arr) {
    return arr.sort();
  }
  console.log(ascending(["a", "xyz", "bc", "cr", "z"]));
}

{
  function descending(arr) {
    return arr.sort().reverse();
  }
  console.log(descending(["a", "xyz", "bc", "cr", "z"]));
}

{
  function sortLowToHigh(arr) {
    return arr.sort((a, b) => a - b); // USING COMPARE FUNCTION WITH .sort()
  }
  console.log(sortLowToHigh([0, 5, -4, 17, 2, 11]));
}

{
  function sortHightoLow(arr) {
    // return arr.sort((a, b) => a - b).reverse();
    return arr.sort((a, b) => b - a);
  }
  console.log(sortHightoLow([0, 5, -4, 17, 2, 11]));
}

{
  function priceDescending(arr) {
    return arr.sort((a, b) => b.price - a.price);
  }
  console.log(
    priceDescending([
      { id: 1, price: 100 },
      { id: 2, price: 350 },
      { id: 3, price: 85 },
      { id: 4, price: 165 },
    ])
  );
}

{
  async function postsUser(uid) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await promise.json();
    const dataFilter = data.filter(user => user.userId === uid);
    console.log(dataFilter);
  }
  postsUser(3);
}

//  OR
{
  function postsUser(uid) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((promise) => promise.json())
      .then((data) => {
        const dataFilter = data.filter(user => user.userId === uid);
        console.log(dataFilter);
      });
  }
  postsUser(8);
}

/*
{
    async function first6Incomplete() {
        const promise = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await promise.json();
        const result = [];
        for (let i = 0, j = 0; j < 6; i++) {
            if (!data[i].completed) {
                result.push(data[i]);
                j++;
            }
        }
        console.log(result);
    }
    first6Incomplete();
}
*/

//  OR

{
   async function first8Incomplete() {
    const promise = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await promise.json();
    const dataFilter = data.filter(user => !user.completed).slice(0, 8);
    console.log(dataFilter);
   }
   first8Incomplete(); 
}