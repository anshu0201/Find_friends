import { Injectable } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CheckdetailsService {

  checkPhoneNumber(phonenumber){
  
    if(phonenumber.length==10)
    {      
     return true;
    }
    else
    {
    return false;
    }
  }
  checkEmail(email){
  
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    let searchfind = regexp.test(email);
    return searchfind;
  }
  nameTosmall(name:string)
  {
    return name.toLocaleLowerCase();
  }
  lastnameTosmall(lastname:string)
  {
    return lastname.toLocaleLowerCase();
  }

  constructor() { }
}
