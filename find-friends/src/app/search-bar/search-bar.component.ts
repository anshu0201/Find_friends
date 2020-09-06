import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
import { HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchTerm: string;
  public friendslist=[];
  user = {
    "phonenumber":"1234567890",
    "name":"Anshupruya"
   };
  body = JSON.stringify(this.user);

  constructor(private _friendslist : FriendsService,private http : HttpClient) { 
    
   }
search()
{if(this.searchTerm!="")
{
  this.friendslist=this.friendslist.filter(res=>{return res.name.toLocaleLowerCase().indexOf(this.searchTerm.toLocaleLowerCase()) !== -1 });
}
else{
  this.ngOnInit();
}
}
  ngOnInit(): void {
    this._friendslist.getfriends()
    .then(data => this.friendslist= data);

  
 let headers = new HttpHeaders({
  'Content-Type': 'application/json'
});
let options = {
  headers: headers
}

this.http.post('/assets/data/friends_list.json', this.body, options)
  .subscribe(data => {
       console.log(data);
});


  }
   
  

}
