// code-snippets.js

const snippets = {
    javascript: {
        helloWorld: `console.log('Hello, World!');`,
        factorial: `function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}`
    },
    python: {
        helloWorld: `print("Hello, World!")`,
        factorial: `def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n-1)`
    },
    java: {
        helloWorld: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        factorial: `public class Factorial {
    public static int factorial(int n) {
        if (n == 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }
}`
    }
};

module.exports = snippets;