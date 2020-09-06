import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'find-friends'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('find-friends');
  });

  it(`spyon demo call through'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'getnextseason').and.callThrough();
    app.nextseason();
    var season=app.getnextseason();   
    app.getnextseason();
  });
  it(`spyon demo toEqual'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'getnextseason');
    app.nextseason();
    var season=app.getnextseason();   
    expect(app.season).toEqual('Summer');
  });
  it(`spyon demo toFake'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'getnextseason').and.callFake(():string=>{
      console.log('in the future');
      return 'Winter';
    });
    app.nextseason();
    let season =app.getnextseason();  
    let seas='Summer'; 
    //expect(season).toEqual(seas);
  });


});
