export  class  Post {

    id: number;

    idAutor: number;

    idKategoria: number;
    
    title: string;

    imgurl: string;

    createdData: string;

    userName: string;
    
    constructor(values: Object = {}) {
    
    Object.assign(this, values);
    
    }
    
 }
 