import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'find-friends';
  season = 'Spring';
  nextseason()
  {
    this.season='Summer';
  }
getnextseason(){
  return this.nextseason();
}
 
}
