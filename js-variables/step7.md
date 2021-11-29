There are two issues happening here:
- The second `for-loop` isn't initialized with a starting value.
- Because we're using the same count variable, and variables declared with `var` aren't block scoped, the second for loop is actually starting with the value 6, which triggers the stopping condition for both loops.

Now that you've spotted the problem, let's fix it. 

- Change the variable declaration for both `for loop` counters to use `let`, to avoid namespace conflicts via block scoping.
- Assign the count variable declared in the second `for loop` to start at 0.

Run the program again with `node index.js`{{copy}}. You should now see the array with all of the plants and animals getting logged correctly!

If you're curious, you can try logging the variable `i` in-between the two for loops. You should get an error that indicates that this variable is not in-scope outside of the for loop blocks, now that we're using `let`.