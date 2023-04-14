const _speed = Symbol('speed');//propriedade privada

class Car 
{
    constructor(name)
    {
        this.name = name;
        this[_speed] = 0;
    }
    set speed(value)
    {
        console.log('a setter was triggered. speed: ' + this[_speed]);
        if(typeof value != 'number') return;
        if(value >= 100 || value <= 0) return;
        this[_speed] = value;
        console.log('setted speed: ' + value);
    }
    get speed()
    {
        console.log('a getter was triggered');
        return 'speed: ' + this[_speed];
    }
    run()
    {
        if(this[_speed] >= 100) return;
        this[_speed]++;
    }
    stop()
    {
        if(this[_speed] >= 100) return;
        this[_speed]--;
    }
}
const c1 = new Car('Fusca');
for (let i = 0; i <= 200; i++)
{
    c1.run();
}
c1.speed = 99;
console.log(c1.speed);

class Pessoa {
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
  
    get nomeCompleto() {
      return this.nome + ' ' + this.sobrenome;
    }
  
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    }
  }
  
  const p1 = new Pessoa('Emilio', 'Bresolin');
  p1.nomeCompleto = 'Laura Bresolin';
  console.log(p1.nome);
  console.log(p1.sobrenome);