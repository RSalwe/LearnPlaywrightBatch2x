//Private Fields (#) - Hidden Data
//PUBLIC Fields
class Credentials {
    #apiKey;//Private variable are not allowed to be used outside
    user;
    constructor(user, key) {
        this.user = user;//Public
        this.#apiKey = key;
    }
    //Custom made function by us
    rupeshgetAuthHeader() {
        return "Bearer: " + this.#apiKey;
    }
}
let cred = new Credentials("admin", "secret_key_1234");
console.log(cred.user);
//console.log(cred.apikey); undefined
//console.log(cred.#apikey); //error
//calling custom made method outside class
let token = cred.rupeshgetAuthHeader();
console.log(token);

