
const a = 10
var p1 = new Promise((resolve, reject) => {
    if(a > 10){
        const r = {
            status: true,
            message: "I am resolved"
        }
        resolve(r);
    }else{
        const r = {
            status: false,
            message: "I am rejected"
        }
        reject(r);
    }
});

console.log('Start of the program')
p1.then((res) => { console.log(res) },
        (e) => { console.log(ae) });

console.log('After the promise')

p1.then((res) => { console.log(res) })
    .catch((e) => { console.log(e) });

    console.log('End of the program')