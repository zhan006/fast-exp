/*
@param x This is the base
@param n This is the power
@param mod Optional modulus
@return x^n if mod is not specified, else x^n % mod
*/
module.exports = fastExp = (x, n, mod = null)=>{
    //check if n is an integer
    if(n % 1 != 0) throw new Error("n should not be a float")
    if(n < 0 ) return fastExp(1/x, -n, mod)
    else{
        //convert to BigInt
        try{
            x = x % 1 === 0? BigInt(x) : x
            n = BigInt(n)
            mod = mod === null? null : BigInt(mod)
    
        }
        catch(error){throw error}

        let res = BigInt(1)
        let bin = n.toString(2)
        for(i of bin){
            res = res * res
            if(parseInt(i) === 1) {
                //x is a float and res is not so large
                if(typeof x === "number" && res<Number.MAX_SAFE_INTEGER){
                    
                    res = Number(res) * x
                }
                //x if a float and res is so large
                else if(typeof x === "number" && res>=Number.MAX_SAFE_INTEGER){
                    throw new Error("the result is so large and x is a float")
                }
                else{
                    res = res * x
                }
            }
            if(mod) {try{
                res = res % mod
            }catch(error) {throw error}
        }
        }
    res = res > Number.MAX_SAFE_INTEGER? res : Number(res)
    return res
    }
}
