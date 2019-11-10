export class User{
    constructor(
        public id:number,
        public name:string,
        public familyname:string,
        public email:string,
        public password:string,
        public birthday:Date,
        public gender:string,
    ){}
    
}