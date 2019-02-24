let a={
    b:[1,2,3,4]
}
let c={}
let d=JSON.stringify(a.b)
c.b=JSON.parse(d)
c.b.push('hehse')
console.log(c.b)