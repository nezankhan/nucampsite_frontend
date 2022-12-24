const gems = [
    { type: 'amethyst', price: 8 },
    { type: 'turquoise', price: 50 },
    { type: 'selenite', price: 2 },
    { type: 'topaz', price: 10 },
    { type: 'emerald', price: 500 }
]

const gemsOverTen = gems.reduce((acc, cur) => {
   if (cur.price < 10) return acc;
   return [...acc,cur]
}, []);

console.log(gemsOverTen)