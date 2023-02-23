let M = 90000, C = 60000, n = 24

i = (((M / C) ** (1 / n)) - 1) * 100

console.log(`A taxa de juros mensal é de ${i}%`)