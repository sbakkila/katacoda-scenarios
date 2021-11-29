Great work! Now, let's go ahead and refactor the combinedList variable declaration to use `const` instead of `var`, since we won't need to reassign this variable.

Run the code by pressing `node index.js`{{copy}} and pressing enter once again.

We've fixed all of the error messages! Hooray! But if you look at the output in your terminal, you'll see that our animals are being left out. The array that's supposed to contain both plants and animals only has the plants.

Read through the code to figure out why this is happening.

>>Q4: Why is the function only returning the plants? <<
( ) We need to use a nested `for loop`
( ) The `for loop` has an incorrect stopping condition
(*)  Namespace pollution with the variable `i`
( ) `combinedPlantsAndAnimals` has access to the parent scope.

If you're having trouble spotting the bug, try using `console.log` to log the value of `i` between the two loops.