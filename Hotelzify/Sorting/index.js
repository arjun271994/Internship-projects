let arr = [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1];

/*to sort this array I am using the following method 
I will initialise the array with a variable zeroCount and will run a forLoop to count the number of zeros and save them in zeroCount.
Now I will run another loop to place all zeros first in the array (from index 0 to index<zeroCount so if there are 9 zeros in the array the loop will run from 0-8 and place 9 zeros first in the row)
Now I will run the third loop to initiate the i from 9 to randomArr.length and place 1s for all remaning places in the array
*/

// 1st solution without any inbuilt method 
function sorting(randomArr) {
  let zeroCount = 0;

  for (let i = 0; i < randomArr.length; i++) {
    if (randomArr[i] === 0) {
      zeroCount++;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    randomArr[i] = 0;
  }

  for (let i = zeroCount; i < randomArr.length; i++) {
    randomArr[i] = 1;
  }

  return randomArr;
}

let x = sorting(arr);
console.log(x);

// 2nd solution with push inbuilt method 
// function sortingAgain(randomArr) {
//   let zeros = [];
//   let Ones = [];

//   for (let i = 0; i < randomArr.length; i++) {
//     if (randomArr[i] === 0) {
//       zeros.push(randomArr[i]);
//     } else {
//       Ones.push(randomArr[i]);
//     }
//   }

//   return [...zeros, ...Ones];
// }

// let x = sortingAgain(arr);
// console.log(x);
