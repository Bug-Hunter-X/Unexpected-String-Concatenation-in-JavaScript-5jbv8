# Unexpected String Concatenation in JavaScript

This example demonstrates a common JavaScript error stemming from the language's loose typing system.  When performing addition with operands of different types (e.g., number and string), JavaScript implicitly converts the number to a string and performs string concatenation instead of numerical addition. This can lead to unexpected results and subtle bugs.

The `bug.js` file contains the erroneous code, while `bugSolution.js` presents a solution.