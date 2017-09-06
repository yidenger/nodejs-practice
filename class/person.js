const fs = require('fs');
const writeFileAsync = (filepath, data) => {
    new Promise((resolve, reject) => {
        return fs.writeFile(filepath, data, err => {
            if(err) reject(err)
            resolve();
        })
    })
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`Hi, my name is ${this.name}, i am ${this.age} years old`);
    }
    async save() {
        await writeFileAsync(`${__dirname}/data.log`, `${this.name} || ${this.age}`);
    }
}

const xiaoming = new Person('Xiaoming', 22);
xiaoming.sayHi();

(async () => {
    await xiaoming.save();
})()
.catch(err => {
    console.log(er)
})