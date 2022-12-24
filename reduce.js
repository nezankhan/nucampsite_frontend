const numbers = [3,5,4,10];

const total = numbers.reduce((sumtotal,item)=>{
    console.log(`This value ${item} from array is added to ${sumtotal}`)
    
    return sumtotal+item}


,0)

console.log(total)