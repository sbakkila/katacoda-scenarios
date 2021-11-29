You should have gotten an error message saying: `TypeError: cannot read property 'push' of undefined` 

This error message isn't that helpful -- let's change the declaration of the `animals` and `plants` arrays in order to use the const keyword. We know that we won't be reassigning these variables.

Run your code again with: `node index.js`{{copy}}

Now you should get a much more helpful error message. What is it?
>>Q2: What error did you get? <<
( ) SyntaxError: Unexpected token '{'
( ) TypeError: Cannot read property 'push' of undefined
(*) ReferenceError: Cannot access 'animals' before initialization
( ) InternalError: Array initializer too large

This is a much more informative error message! Switching from `var` to `const` not only helps us debug this problem, but will help us identify similar problems more effectively in the future.

Now, go ahead and fix the bug by moving the declaration of the `animals` array to the top of the file, just under the `plants` array.