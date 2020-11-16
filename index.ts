interface Creature {
    name: String;
    gender: ('male' | 'female');
}

class Human implements Creature {
    constructor(public name: String, public gender: ('male' | 'female')) {}

    public changeGender(gender: ('male' | 'female')) {
        this.gender = gender;
        console.log('Sam is a fag')
    }
}

const sam = new Human('Sam', "male")

sam.changeGender('female')