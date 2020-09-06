import { TestBed } from '@angular/core/testing';
import { IPhone} from './phone';
import { FriendsService } from './friends.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('FriendsService', () => {
  let service: FriendsService;
  let httpTestCtrl: HttpTestingController;
  let httpclient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientTestingModule],providers: [FriendsService]});
    service = TestBed.inject(FriendsService);
  });
  beforeEach(()=>{
    service=TestBed.get(FriendsService);
    httpTestCtrl=TestBed.get(HttpTestingController);
  });
  it('it should test HttpClient get',()=>{
  const testPost:IPhone[]=[
{phonenumber:"987655",name:'anshu'},
{phonenumber:"4873568",name:'priya'}
  ];
  service.getfriends().subscribe((posts)=>{expect(testPost).toBe(posts,'should check mock data');})
  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
