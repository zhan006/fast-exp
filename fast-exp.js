module.exports = fastExp = (x, n)=>{
    //check if x and n integer
    let _x = parseFloat(x)
    let _n = parseInt(n)
    //is not a number?
    if(_x == NaN || _n == NaN) throw new Error("x and n should be integers")
    //is float?
    if(_n != n) throw new Error("n should not be float") ;
    x = _x
    n = _n
    if(n < 0 ) return fastExp(1/x, -n);
    else{
        let res = 1
        let bin = n.toString(2)
        for(i of bin){
            res = res * res
            if(parseInt(i) === 1) res = res * x
        }
    return res
    }
}
console.log(fastExp(2,-10))