// Solve the questions below  Promises:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

let myPromise = new Promise(function (myResolve) {
  setTimeout(myResolve, 4000, "success");
});

// #2) Run the above promise and make it console.log "success"

myPromise.then(function (no) {
  console.log(myPromise);
});

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);

// #2) Run the above promise and make it console.log "success"

promise.then((value) => {
  console.log(value);
});

// #4) Catch this error and console log 'Ooops something went wrong'
// Promise.reject('failed')

Promise.reject("failed").catch(console.log("Ooops something went wrong"));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  "http://swapi.dev/api/people/1",
  "http://swapi.dev/api/people/2",
  "http://swapi.dev/api/people/3",
  "http://swapi.dev/api/people/4",
];

promise.all(urls.map(url => fetch(url).then(response => response.json())))
.then(array => array.map(response => 
    console.log('1', array[0]),
    console.log('2', array[1]),
    console.log('3', array[2]),
    console.log('4', array[3])

    ))
.catch(error => console.log('ughhhh fix it!', error))

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?


