const User = {
    _email: 'hc@hc.com',
    _password: "abc",                         /// _ (underscore )means private property


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }

}

const tea = Object.create(User)
console.log(tea.email);