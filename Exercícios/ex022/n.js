function somar(n){
    let tot = 0
    for(let i = 1; i <= n; i++){
        tot = tot + i
    }
    return tot
}
console.log(somar(4))