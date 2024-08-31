const school = 'BCSIR SCHOOL'
const biddaloy = 'bcsir school'
 
const r = school.toLowerCase()
console.log(r);


// case sensitive

console.log(biddaloy.toUpperCase())


if(school === biddaloy){
    console.log('valo')
}
else{
    console.log('vlo na')
}





if(school.toLowerCase() === biddaloy.toLowerCase()){
    console.log('valo')
}
else{
    console.log('vlo na')
}

// string space sensitive

const pani = 'water'
const jol = '  water  ' 

if(pani.trim() === jol.trim()){
    console.log('khabo')
}
else{
    console.log('khabo na')
}

