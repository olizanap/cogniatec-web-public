// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Suprimir advertencias de MUI Grid
const originalError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('MUI Grid: The `item` prop has been removed') ||
     args[0].includes('MUI Grid: The `xs` prop has been removed') ||
     args[0].includes('MUI Grid: The `md` prop has been removed'))
  ) {
    return;
  }
  originalError.call(console, ...args);
};
