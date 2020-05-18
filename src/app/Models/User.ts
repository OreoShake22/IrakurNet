export  class  User {

    id: number;
    
    name: string;

    email: string;
    
    password: string;
    
    constructor(values: Object = {}) {
    
    Object.assign(this, values);
    
    }
    
 }
 