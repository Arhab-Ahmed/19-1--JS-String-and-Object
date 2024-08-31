const school={
    classRoom : 26,
    teachers: 30,
    name: 'bcs',
    
    uniqu:{
        color : 'blue',
        event:['21 feb', '16 dec', '26 march', ] ,
        result:{
            gpa: 5,
            get: 'award'
        }
       
    }

}
// see nasted objs
const see = school.uniqu.color;
const see2 = school.uniqu.result.gpa;
const see3 = school.uniqu.event
const see4 = school["uniqu"]['color']


console.log(see)
console.log(school.uniqu.color)
console.log(see4)

// update nsated obj property

school.classRoom = 501
console.log(school.classRoom)

// update array
const chenge = school.uniqu.event[1] = '12 feb'

school.uniqu.event[1] = '12 feb'

console.log(chenge)