const phn= {
    brand : "mi",
    price : 20000,
    Gb : 5,
    isNew: true
}

// for in use for object

// kono condition er dorkar nai for in jane aktar por arekta asbe r property ses hoile sesh //protibar loop cholar por property chenge hobe .(phn er joto gula property ase shob gula ay er moddhe asbe 1 ta 1 ta kore)

    for(const ay in phn){
// phn er joto gula property ase shob gula 'ay' er moddhe chole asbe
// protibar loop cholar por ay er maan chenge hoi jabe auto,jemon prothom bar brand
    console.log(ay);
}  


// judi property r maan dekte chai
    for(const b in phn){

// aitar mane holo phn namok obj e b nampok variable er maan dekhao   
//obj er nam er pore [] braket er bhitore judi kono variable dei, setar maan judi kono akta property r nam hoi tahole se property r maan dekhabe jeta value.js e ase 

// phn er bhitore b (brand) er maan dekhao

    console.log(phn[b])
}



// 2tai dekte chaile 

for(const a in phn){
    console.log(a)
    console.log(phn[a])

}