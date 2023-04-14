class EletronicDevice
{
    constructor(name)
    {
        this.name = name;
        this.running = false;
    }
    run()
    {
        if(this.running)
        {
            console.log(this.name + ' is running.');
            return;
        }
        this.running = true;
    }
    off()
    {
        if(!this.running)
        {
            console.log(this.name + ' is off.');
            return;
        }
        this.running = false;
    }
}
/*
const d1 = new EletronicDevice('SmartPhone');
d1.run();
d1.off();
console.log(d1);
*/
class SmartPhone extends EletronicDevice
{
    constructor(name, collor, model)
    {
        super(name);
        this.collor = collor;
        this.model = model;
    }
}
const s1 = new SmartPhone('iPhone', 'Black', 11);
s1.run();
console.log(s1);

class Tablet extends EletronicDevice {
    constructor(name, temWifi) {
      super(name);
      this.temWifi = temWifi;
    }
  
    run() {
      console.log('Olha, você alterou o método ligar.');
    }
  
    sayHello() {
      console.log('Hello!');
    }
  
    static creator(nome, temWifi) {
      return new Tablet.prototype.constructor(nome, temWifi);
    }
  }

  
  const t1 = Tablet.creator('iPad', true);
  console.log(t1);