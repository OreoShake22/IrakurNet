export  class  Post {

    id: number;

    idAutor: number;

    idKategoria: number;
    
    title: string;

    imageUrl: string;

    createdData: string;

    name: string;

    kategoria: string;
    
    constructor(values: Object = {}) {
    
    Object.assign(this, values);
    
    }
    
 }
 