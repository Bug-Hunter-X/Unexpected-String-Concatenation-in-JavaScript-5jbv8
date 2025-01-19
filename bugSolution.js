function foo(a, b) {
  // Explicit type checking and conversion
  a = Number(a);
  b = Number(b);
  
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Operands must be numbers";
  }
  
  return a + b; 
}

console.log(foo(1, '1')); // Output: 2
console.log(foo('abc', 1)); //Output: Invalid input: Operands must be numbers