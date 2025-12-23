// Exporting functions using CommonJS
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Export as object
module.exports = { add, subtract };
