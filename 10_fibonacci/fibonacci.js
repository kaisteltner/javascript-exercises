const fibonacci = function(n) {
    // Convert n to number and continue only when n >= 0
    n = Number(n);
    if (n < 0) return 'OOPS';
    
    // Initial sequence
    let F = [1, 1];

    // Calculate Fibonacci numbers if n > 1
    for (let i = 2; i < n; i++) {F.push(F[i - 2] + F[i - 1])};
    return F[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
