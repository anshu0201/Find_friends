import { TestBed } from '@angular/core/testing';

import { CheckdetailsService } from './checkdetails.service';

describe('CheckdetailsService', () => {
  let service: CheckdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [CheckdetailsService]});
    service = TestBed.inject(CheckdetailsService);
  });
   
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('check function checkPhonenumber  10 digit negative cases', () => {

 let testcase= "10234";
 expect(service.checkPhoneNumber(testcase)).toBe(false);
});
it('check function checkPhonenumber  10 digit negative cases', () => {

  let testcase= "1023487653";
  expect(service.checkPhoneNumber(testcase)).toBe(true);
 });
it('check function checkEmail negative cases', () => {

  let testcase= "10234";
  expect(service.checkEmail(testcase)).toBe(false);
 });
 it('check function checkEmail id positive cases', () => {

  let testcase= "1anshu@com.com";
  expect(service.checkEmail(testcase)).toBe(true);
 });
 it('check function nameTosmall positive cases', () => {

  let testcase= "ABC";
  expect(service.nameTosmall(testcase)).toEqual('abc');
 });
 it('check function nameTosmall nagative cases', () => {

  let testcase= "ABC";
  expect(service.nameTosmall(testcase)).not.toEqual('aBc');
 });

 it('check function lastnameTosmall positive cases', () => {

  let testcase= "ABC";
  expect(service.lastnameTosmall(testcase)).toEqual('abc');
 });
 it('check function lastnameTosmall nagative cases', () => {

  let testcase= "ABC";
  expect(service.lastnameTosmall(testcase)).not.toEqual('aBc');
 });
});
