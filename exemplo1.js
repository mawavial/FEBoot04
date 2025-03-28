const MAX_PRIME = 1000000; 
 
function isPrime(n) { 
  for (let i = 2; i <= Math.sqrt(n); i++) { 
    if (n % i === 0) return false; 
  } 
  return n > 1; 
} 
 
function generatePrimes(quota) { 
  const primes = []; 
  while (primes.length < quota) { 
    const candidate = Math.floor(Math.random() * MAX_PRIME); 
    if (isPrime(candidate)) primes.push(candidate); 
  } 
  return primes; 
} 
 
document.querySelector("#generate").addEventListener("click", () => { 
  const primes = generatePrimes(document.querySelector("#quota").value); 
  document.querySelector("#output").textContent = `Gerados ${primes.length} números primos!`; 
}); 
 
document.querySelector("#reload").addEventListener("click", () => { 
  document.location.reload(); 
}); 
