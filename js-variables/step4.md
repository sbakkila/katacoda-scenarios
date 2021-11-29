The error message you should have gotten from the last step is `combinedList is not defined`. 

Look through the code to see if you can figure out why.

>>Q3: Why are we seeing this error? <<
(*) `combinedList` is declared within a function and not available within the global scope.
( ) `combinedList` is getting hoisted but not assigned.
( ) `combinedList` is a `const` variable that should not be reassigned.
( ) `combinedPlantsAndAnimals` has access to the parent scope.
