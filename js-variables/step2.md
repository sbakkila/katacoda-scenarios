You should have gotten an error message saying: `TypeError: cannot read property 'push' of undefined`.

Move the `animals` array to the top of the file, just under the `plants` array.

Also, since we don't expect to reassign either of these variables, change them both from `var` to `const`. This will give us more informative error messages when we try to access these variables before they are initialized, and will help us avoid bugs like the one we just fixed.