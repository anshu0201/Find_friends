import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    

  }

}
