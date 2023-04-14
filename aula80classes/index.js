class Person
{
    constructor(id, email, name)
    {
        this.id = id;
        this.email = email;
        this.name = name;
    }
    talk()
    {
        console.log(`${this.name} is talking`);
    }
}
const person1 = new Person(1, 'emilio@mail.com', 'Emilio Bresolin');
const person2 = new Person(2, 'helena@mail.com', 'Helena Bresolin');
const person3 = new Person(3, 'lauri@mail.com', 'Lauri Bresolin');
console.log(person1);
console.log(person2);