///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
//here we are taking each array and looping through them and incrementing them each time and putting them into a new value called totalAcres
let totalAcres = 0;

for (i = 0; i < fujiAcres.length; i++) {
    totalAcres += fujiAcres[i]; 
}
for (i = 0; i < galaAcres.length; i++) {
    totalAcres += galaAcres[i];
}
for (i = 0; i < pinkAcres.length; i++) {
    totalAcres += pinkAcres[i];
}

console.log(totalAcres);


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
//here we take each array and divide them by the total to get our average daily
averageDailyAcres = 0;

averageDailyAcres = totalAcres / (fujiAcres.length + galaAcres.length + pinkAcres.length);




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
//in this section while our acres are > 0 we minus our average from whats left and increment days by 1.
while (acresLeft > 0) {
    acresLeft -= averageDailyAcres;
    days += 1;
}

// console.log(acresLeft); For testing purposes to compare against days and make sure value is 0.
console.log(days);


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
// here i am using a map function to go ahead nad multiply each value within the array to get the updated values. I know this isnt a loop. After taking some time it seems I needed to use a for of loop.
let fujiTons = fujiAcres.slice(0,7);
let galaTons = galaAcres.slice(0,7);
let pinkTons = pinkAcres.slice(0,7);

let fujiYield = fujiTons.map(fujiTons => fujiTons * 6.5);
console.log(fujiYield);

let galaYield = galaAcres.map(galaTons => galaTons * 6.5);
console.log(galaYield);

let pinkYield = pinkTons.map(galaTons => galaTons * 6.5);
console.log(pinkYield);



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
//here I am trying to loop through the new arrays and increase the values. Got partway through this one without getting the output I am looking for. Prints the array but doesnt increment.
let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;
for (i = 0; i < fujiYield.length; i++) {
    fujiPounds += fujiYield[i]; 
}
for (i = 0; i < galaYield.length; i++) {
    galaPounds += galaYield[i]; 
}
for (i = 0; i < pinkYield.length; i++) {
    pinkPounds += pinkYield[i]; 
}
console.log(fujiPounds);
console.log(galaPounds);
console.log(pinkPounds);

// let fujiPounds =
// let galaPounds =
// let pinkPounds =






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// let fujiProfit =
// let galaProfit =
// let pinkProfit =






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
