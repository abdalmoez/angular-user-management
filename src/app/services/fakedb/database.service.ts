import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements InMemoryDbService{

  constructor() { }

  createDb(){

    let  users =  [
      {  id: 1, name:"Mike", familyname:"Zodiac",email:  "1@live.fr",password:"1",  date:  new Date(2019,10,1),gender:"male" },
      {  id: 2, name:"Guil", familyname:"Wazwoskie",email:  "2@live.fr",password:"2",  date:  new Date(2019,10,2),gender:"male"},
      {  id: 3, name:"Booda", familyname:"Khaled",email:  "3@live.fr",password:"3",  date:  new Date(2019,10,3),gender:"male" }
    ];

 
    return {users};
 
   }
}