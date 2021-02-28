module.exports.gte = (a,b)=>{
    let x= b.data.id;
    let y = b.data.value
    let z = a[x];
    return z >= y
}
module.exports.contains = (a,b)=>{
    let x= b.data.id;
    let y = b.data.value
    let z = a[x];
    return z.toLowerCase().includes(y.toLowerCase());
}
module.exports.lte = (a,b)=>{
    let x= b.data.id;
    let y = b.data.value
    let z = a[x];
    return z <= y
}
module.exports.eq = (a,b)=>{
    let x= b.data.id;
    let y = b.data.value
    let z = a[x];
    if(y.toLowerCase() === "yes") y= true
    else y=false
    return z === y
}
