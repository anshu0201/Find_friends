import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ imports: [
      ReactiveFormsModule,
      FormsModule,
  ],
      declarations: [ FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
