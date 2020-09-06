import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IPhone} from './phone';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  private _url: string = "/assets/data/friends_list.json";
  constructor(private http : HttpClient) { }
  getfriends():Promise<IPhone[]>{
    return this.http.get<IPhone[]>(this._url).toPromise();
  }
}
