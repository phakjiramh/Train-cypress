var x
let y // var let เราสามารถเปลี่ยน value ของตัวแปรได้
const z = 15 //เราไม่สามารถเปลี่ยน value ของ z เป็นจำนวนอื่ได้
x = 10
y = x 
console.log(x, " ", y, " ", z)
x = 20;

var name = "John"
var lastname = "Dou"
var a = "20"
var b = "10"
console.log(name + lastname)// JohnDou
console.log(name + x)// John20
console.log(a+b)//2010
console.log(parentInt (a) + parseInt(b)) // 30 เปลี่ยน str เป็น Num
console.log(parentInt (a) * parseInt(b))
console.log(parentInt (a) / parseInt(b))
console.log(parentInt (a) - parseInt(b))

x++; x+1
console.log(x) // 21 เนื่องจาก ++ = +1 => x+1 =20+1 =21

x--; x-1

console.log(x % 3) // 20/3 =18 เศษ 2 จะได้คำตอบเป็น 2

x += x; // x = x + x => 2x or 40

var xx = 123
var yy = "Hello"
var zz = true
var aa = xx == yy
var ar = ['red','green','blue']
console.log (typeof xx) // number
console.log (typeof yy) // string
console.log (typeof zz) // boolean
console.log (aa, typeof aa) // fale เพราะ zz ไม่เท่ากับ yy
console.log (typeof ar) // object เพราะ arrey เป็น object ที่มี key เป็นลำดับ คือ 0 1 2 3 ..
console.log (ar[1]) // green
console.log(ar.length) // 3
console.log (ar) //  ['red','green'.'blue']

ar.push ('black') // เอาค่านี้ไปแทรกข้างหลังของ ar
console.log(ar) //['red','green'.'blue', 'black']

var obj = {
    name : 'John',
    lastname: 'Dou'
}
console.log(obj.name,obj.lastname) // John Dou
console.log(obj["name"]) // John
obj.age = 20
console.log (obj) // object{name: 'John', lastname: 'Dou', age: 20}

var un = undefined
var nu = null
console.log(typeof un) // undefined
console.log(typeof nu) // object
console.log(un == nu) // true


////////////////////////// function///////////////////////////////////////

function plus(x,y){ //ชื่อ function plus
    return x+y;
}
var r = plus(10,20)
console.log("result",r) // 30


function log(data){
    console.log(data)
    return;
}
log("test"); //test


function area(width,high,type){
    if(type=="square") return width*high //if typeเป็น "square" ต้องได้ค่า width*high
    else return Math.PI*x^2 // /if type ไม่เป็น "square" ต้องได้ค่า Math.PI*x^2
}
log(ares(10,10,'square')) // จะได้ 100 เพราะเข้า if => width*high
log(area(10)) // จะได้ค่าจากสูตร Math.PI*x^2  เพราะ type ไม่ใช่ square


///////////////////////////Arrey + for loop//////////////////////////////////////////
// array เอาไว้เก็บค่าที่เรียงกันเป็นลำดับ โดย index จะเริ่มจาก 0
let myArr = [ // syntax => let ตัวแปร = ['datatypeไหนก็ได้'] //note obj ต้องปรกอบด้วย keyกับ value
    'string',
    123,
    {text:'test'}
    ,['test']
    , true
] //ถ้าเก็บในค่า array เราต้องให้มันลูปเริ่มที่ index 0
for (let i = 0; i < myArr.length; i++) { // จำไปเลยส่วนใหญ่เขียนแบบนี้ไม่เปลี่ยนแปลง ถ้าอธิบาย คือ 
                                       // i = 0 คือ เริ่มลูปตั้งแต่ array ช่องที่ 0 , i < myArr.length คือ ลูปจนกว่า i < ความยาวช่องของ myArr, i++ คือ ให้มันรันต่อไปเรื่อยๆในช่องต่อไป
console.log("index: " + i, myArr[i]) // index:0 string,  index:1 123, index:2 object {text:'test'},index:3 ['test'], index:4 true
}

///การใส่ค่า ลบค่าใน array
myArr[5] = "test test" // add index ช่องที่5 (เดิมมี 0-4 ช่อง)
log(myArr) // ["string", 123, object, Array[1], true, "test test"]
//or
myArr.push("test index") // add เข้าไปข้างหลังสุด
log(myArr) //  ["string", 123, object, Array[1], true, test index]

myArr.push() // ลบตัวสุดท้ายออก เดิม ["string", 123, object, Array[1], true]
log(myArr) // จะได้ ["string", 123, object, Array[1]]

myArr.unshift('test index 0') // add ค่าไว้หน้าสุด เดิม ["string", 123, object, Array[1], true]
log(myArr) // ['test index 0', "string", 123, object, Array[1], true]

myArr.shift() //ลบค่าข้างหน้าสุด เดิม ['test index 0', "string", 123, object, Array[1], true]
log(myArr) // ["string", 123, object, Array[1], true]

////ถ้าอยาก loop array โดยไม่ใช้ for โดยใช้ .map
let myArr3 =[
    {name: "test1"},
    {name: "test2"},
    {name: "test3"},
    {name: "test4"},
    {name: "test5"},
]
let myNewArr3.map ((myVal,index)=>{
    return let.name  
})
console.log(myNewArr3) //["test1", "test2", "test3", "test4", "test5"] จะมีแค่ value แต่ไม่มี key


///////////////////////////////Object///////////////////////////////////////////////
let myObj = {}
myObj.name ="Google"
myObj.lastname = ".com"
console.log(myObj) // {name: "Google", lastname: ".com"}
console.log("myObj.name:", myObj.name) // myObj.name: John
console.log("myObj[name]:", myObj["name"]) // myObj[name]: John

myObj.nameLength = function(){
    return this.name.length
}
console.log(myObj.nameLength()) // จะได้ 2 เพราะ myObj มี 2 ตัว คือ myObj.name ="Google" & myObj.lastname = ".com"

delete myObj.lastname
console.log(myObj) // object {nam: "Google"} lastname ถูกลบไป


/////////////////////////////If else for////////////////////////////////////////////
let test1 =[
    { x: 13, y: 14},
    { x: 23, y: 9},
    { x: 87, y: 62},
    { x: 57, y: 27}
]

test1.forEach((val)=>{ //ใช้ if อย่างเดียว
    if(val.x>50)
    console.log("X eqaul to",val.x) // X equal to 87 ,X equal to 57  
})
//or//
test1.forEach((val)=>{ //ใช้ if และ else
    if(val.x > 50) console.log("X eqaul to",val.x) // X equal to 87 ,X equal to 57  
    else console.log("Y eqaul to", val.y) // Y equal to 14, Y equal to 9, X equal to 87 ,X equal to 57 
    // วิธีการทำงานของอันนี้คือ มันจะวิ่งไปช่องแรก คือ { x: 13, y: 14} มันเช็ค x ก่อนแต่ x ช่องนี้มัน <50 ไม่เข้าเงื่อนไข if มันเลยไปที่ else แทน เพื่อเอา Y ออกมา
    //จึงเป็นเหตุผลที่ได้ Y ขึ้นมาก่อน
})

//else if//
test1.forEach((val)=>{ //ใช้ if และ else
    if(val.x > 40) console.log("X eqaul to",val.x) 
    else if (val.x == 50) console.log("X eqaul to",val.x)
    else console.log("Y eqaul to", val.y) 
})

////////////Switch/////////////////////////////
let mySwitch = "one" // จะได้ออกมาเป็น mySwitch equal to 1 แต่ถ้าเราเป็นเป็น "two" ก็จะได้เป็น mySwitch equal to 2
switch (mySwitch){
    case "one":
        console.log("mySwitch eqaul to 1");
        break; // ถ้าไม่ break มันจะ log ทุกอันมา

    case "two":
        console.log("mySwitch eqaul to 2");
        break;
    
    case "three":
        console.log("mySwitch eqaul to 3");
        break;

/////////////////////Loop/////////////////////////
//for loop
for(let x=1; x>20; x++)  // x=1 คือเราอยากให้มันเริ่มที่ค่าอะไร ในที่นี้คือเริ่มที่ x=1, x>20 คือเราจะหยุดทำเมื่อไหร่ ในที่นี้หยุดทำเมื่อ x>20, x++ คือหลังจากที่มันทำงานครบลูปหนึ่ง มันก็ต้องทำงานต่อไปอีก 1ช่อง
    console.log("X= ", x); //จะได้ X= 1, X=2, X=3, ..., X=19
}

//while loop
let a = 0
while(a<=20){
    console.log("A equal to ", a); //A equal to 0, A equal to 1, A equal to 3, ..., A equal to 20
    a++;
}

//////////////////////Dom(Document Obj Modal)////////////////
document.getElementById() // อันนี้ไม่ต้องรู้ลึก

