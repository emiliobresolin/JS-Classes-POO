
class FormValidation
{
    constructor()
    {
        this.form = document.querySelector('.form');
        this.eventos();
    }
    eventos()
    {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    handleSubmit(e)
    {
        e.preventDefault();
        const validFileds = this.checkValidFields();
        const validPasswords = this.checkValidPasswords();
        if(validFileds && validPasswords)
        {
            alert('Form sent.');
            this.form.submit();
        }
    }

    checkValidPasswords()
    {
        let valid = true;
        const password = this.form.querySelector('.password');
        const repeatPassword = this.form.querySelector('.repeat-password');
        if(password.value !== repeatPassword.value)
        {
            valid = false;
            this.createError(password, 'Fields password and reapeat password must be equal.');
            this.createError(repeatPassword, 'Fields password and reapeat password must be equal.');
        }
        if(password.value.length < 6 || password.value.length > 12)
        {
            this.createError(password, 'Password must have betweem 6 and 12 characteres');
        }
        return valid;
    }

    checkValidFields()
    {
        let valid = true;

        for (let errorText of this.form.querySelectorAll('.error-text'))
        {
            errorText.remove();
        }
        
        for (let field of this.form.querySelectorAll('.valid'))
        {
            const label = field.previousElementSibling.innerText;
            //console.log(field);
            if(!field.value)
            {
                this.createError(field, `${label} field cannot be blank`);
                valid =  false;
            }
            if(field.classList.contains('cpf'))
            {
                if(!this.cpfValidation(field)) valid = false;
            }
            if(field.classList.contains('user'))
            {
                if(!this.userValidation(field)) valid = false;
            }
        }
        return valid;
    }
    userValidation(field)
    {
        const user = field.value;
        let valid = true; //FLAG
    
        if(user.length < 4 || user.length > 24) {
          this.createError(field, 'User must have between 3 and 12 characteres.');
          valid = false;
        }
    
        if(!user.match(/^[a-zA-Z0-9]+$/g)) {
          this.createError(field, 'User name must contain only letters and/or numbers.');
          valid = false;
        }
    
        return valid;
    }

    cpfValidation(field)
    {
        const cpf = new CpfValidation(field.value);
        if(!cpf.validation())
        {
            this.createError(field, 'Invalid CPF.');
            return false;
        }
        return true;
    }
    createError(field, msg)
    {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
        
    }
}

const validation = new FormValidation();