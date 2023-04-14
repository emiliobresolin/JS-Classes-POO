// 705.484.450-52 070.987.720-03

//first create class to validade the CPF:
class CpfValidation
{
    constructor(sentCPF)
    {
        Object.defineProperty(this, 'cleanCpf', {
            writable:false,
            enumerable:true,
            configurable:false,
            value:sentCPF.replace(/\D+/g, '')
        });
    }
    //second thing is to create a validation method:
    validation()
    {
        if(!this.cleanCpf) return false;
        if(typeof this.cleanCpf !== 'string') return false;
        if(this.cleanCpf.length !== 11) return false;
        if(this.isSequencial()) return false; //this line once included after implementation of isSequencial method
        this.cpfGenerator();//this line once included after implementation of CpfGenerator method
        //console.log(this.newCpf);
        return this.newCpf === this.cleanCpf;
    }
    //the thrid thing you need to do is create a method which checks for sequencial numbers
    isSequencial()
    {
        const seq = this.cleanCpf.charAt(0).repeat(this.cleanCpf.length);
        return seq === this.cleanCpf;
    }
    //thrird thing is to create a method that generates a new CPF:
    cpfGenerator()
    {
        const nineDigitsCpf = this.cleanCpf.slice(0, -2);
        //console.log(NineDigitsCpf);
        const firstDigit = CpfValidation.digitGenerator(nineDigitsCpf);//this line was added after implementation of digitGenerator ALSO we use the class name because its digitGenerator method is a static method
        const secondDigit = CpfValidation.digitGenerator(nineDigitsCpf + firstDigit);//this line was added after implementation of digitGenerator ALSO we use the class name because its digitGenerator method is a static method
        this.newCpf = nineDigitsCpf + firstDigit + secondDigit;//this line was added after implementation of digitGenerator
    }
    //fourth thing you do is to create a digitGenerator method
    static digitGenerator(nineDigitsCpf) //when we don't use this. anywhere in the method, the method can became a static method.
    {
        let total = 0;
        let reverse = nineDigitsCpf.length + 1;
        for (let numericString of nineDigitsCpf)
        {
            //console.log(numericString, typeof numericString);
            //console.log(numericString, reverse);
            total += reverse * Number(numericString);
            reverse--;
        }
        //console.log(total);
        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }
}


//const cpfValidation = new CpfValidation('866.932.120-34');
//const cpfValidationTEST = new CpfValidation('111.111.111-11');

//console.log(cpfValidation); //testing first thing.
//console.log(cpfValidation.validation()); //testing second, thrid and fourth thing
/*
if(cpfValidation.validation())
{
    console.log('Valid CPF');
}else{
    console.log('Invalid CPF');
}*/