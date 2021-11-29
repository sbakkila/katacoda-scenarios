`combinedList` is defined within the `combinePlantsAndAnimals` function, so it's not available within the global scope.

To make this value available outside the function, add a return statement at the bottom of the function to return the array. 

At the bottom of the file, call this function and console.log the value that is returned, rather than trying to access the `combinedList` variable directly.