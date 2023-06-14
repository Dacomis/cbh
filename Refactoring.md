# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Made an `utils.js` file which has functions (`hash` and `toString`) used in `dpk.js` and `dpk.test.js` files.

In `dpk.js` file:
 - moved the constants at the top of the file for extra clarity;
 - created some helper functions:
    1. `getCandidate` - with optional chaining and nullish operator I make the check more clear;
    2. `convertToString` - ensures the candidate is a string;
    3. `checkLength` - ensures the candidate length is not too big;
 - the current logic of `deterministicPartitionKey` is now more concise and clear:
    1. I get the candidate;
    2. If the is no candidate, I return the trivial partition key;
    3. I check if the candidate is a string and that string is not too big;
