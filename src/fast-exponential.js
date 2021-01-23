
module.exports = fastExp = (x, n)=>{
    //check if x and n integer
    if(typeof x != "number") throw new Error("x should be a number")
    if(typeof n != "number") throw new Error("n should be a number")
    if(n % 1 != 0) throw new Error("n should not be a float")
    if(n < 0 ) return fastExp(1/x, -n)    
    else{
        n = n > Number.MAX_SAFE_INTEGER ? BigInt(n) : n 
        let res = 1
        let bin = n.toString(2)
        for(i of bin){
            if(res * res === Infinity) {
                res = BigInt(res)
                if(x % 1 != 0) throw new Error("does not support float multiplied by a BigInt")
                x = BigInt(x)
            }
            res = res * res
            
            if(parseInt(i) === 1) res = res * x
        }
    return res
    }
}
