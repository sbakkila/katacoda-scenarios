There are two issues happening here:
- The second `for-loop` isn't initialized with a starting value.
- Because we're using the same count variable, and variables declared with `var` aren't block scoped, the second for loop is actually starting with the value 6, which triggers the stopping condition for both loops.

Now that you've spotted the problem, let's fix it. 

- Change the variable declaration for both `for loop` counters to use `let`, to avoid namespace conflicts via block scoping.
- Assign the count variable in the second `for loop` to start at 0.

Run the program again with `node index.js`{{copy}}. You should now see all of the plants and 