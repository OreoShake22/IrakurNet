export class Comment {
    id: number;

    idPost: number;

    idAutor: number;
    
    texto: string;

    createdData: string;
    
    constructor(values: Object = {}) {
    
    Object.assign(this, values);
    
    }
}
