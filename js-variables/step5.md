`combinedList` is defined within the `combinePlantsAndAnimals` function, so it's not available within the global scope.

To make this value available outside the function, add a return statement so that this array is returned. At the bottom of the file, call this function and console.log the value that is returned, rather than trying to access the `combinedList` variable directly.