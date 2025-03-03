
window.onerror = function(message, source, lineno, colno, error) {
console.error('Global Error Handler:', { message, source, lineno, colno, error });
};

throw new Error('Test global error'); // Trigger global error

Explanation:
A global error handler catches unhandled errors from anywhere in your application, allowing you to log or report errors consistently.
