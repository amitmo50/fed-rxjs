// import {ComponentFixture, TestBed} from '@angular/core/testing';
// import {HttpClientTestingModule} from '@angular/common/http/testing';
// import {of} from 'rxjs';
// import {UserListComponent} from './user-list.component';
// import {UserService} from './users.service';
// import {CountryService} from './country.service';
//
// describe('UserListComponent', () => {
//     let component: UserListComponent;
//     let fixture: ComponentFixture<UserListComponent>;
//     let userService: UserService;
//     let countryService: CountryService;
//
//     const mockUsers = [
//         {
//             id: 8946,
//             first_name: 'Emory',
//             last_name: 'Lesch',
//             avatar: 'https://robohash.org/estinventorein.png?size=300x300&set=set1',
//             date_of_birth: '1994-10-28',
//             phone_number: '+690 528.188.6811 x09374',
//             address: {
//                 city: 'Kundeside',
//                 street_name: 'Fahey Green',
//                 street_address: '4415 Gorczany View',
//                 zip_code: '25930',
//                 state: 'Illinois',
//                 country: 'United States'
//             }
//         },
//         {
//             id: 8337,
//             first_name: 'Maggie',
//             last_name: 'Hegmann',
//             avatar: 'https://robohash.org/eiusveritatissunt.png?size=300x300&set=set1',
//             date_of_birth: '2001-10-19',
//             phone_number: '+299 (318) 622-5496 x0630',
//             address: {
//                 city: 'Kundeside',
//                 street_name: 'Fahey Green',
//                 street_address: '4415 Gorczany View',
//                 zip_code: '25930',
//                 state: 'Illinois',
//                 country: 'United States'
//             }
//         }
//     ];
//
//     const mockCountryData = [
//         {
//             name: {
//                 common: 'United States',
//                 official: 'United States of America',
//                 nativeName: {
//                     eng: {
//                         official: 'United States of America',
//                         common: 'United States'
//                     }
//                 }
//             },
//             currencies: {
//                 USD: {
//                     name: 'United States dollar',
//                     symbol: '$'
//                 }
//             },
//             languages: {
//                 eng: 'English'
//             },
//             flag: '🇺🇸'
//         }
//     ];
//
//     beforeEach(async () => {
//         await TestBed.configureTestingModule({
//             declarations: [],
//             imports: [HttpClientTestingModule,UserListComponent],
//             providers: [UserService, CountryService]
//         }).compileComponents();
//     });
//
//     beforeEach(() => {
//         fixture = TestBed.createComponent(UserListComponent);
//         component = fixture.componentInstance;
//         userService = TestBed.inject(UserService);
//         countryService = TestBed.inject(CountryService);
//
//         spyOn(userService as any, 'getUsers').and.returnValue(of(mockUsers));
//         spyOn(countryService as any, 'getCountry').and.returnValue(of([mockCountryData]));
//
//         fixture.detectChanges();
//     });
//
//     afterEach(() => {
//         fixture.destroy();
//     });
//
//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });
//
//     it('should load users and user card data', () => {
//         component.ngOnInit();
//         expect(userService.getUsers).toHaveBeenCalled();
//         expect(countryService.getCountry).toHaveBeenCalled();
//         // You can add more expectations based on your component behavior
//     });
//
//     it('should unsubscribe onDestroy', () => {
//         const ngOnDestroySpy = spyOn(component, 'ngOnDestroy').and.callThrough();
//         const subscriptionSpy = jasmine.createSpyObj('subscription', ['unsubscribe']);
//
//         // Replace 'users$' and any other subscriptions with the mock subscriptionSpy
//         component.users$ = subscriptionSpy as any;
//
//         component.ngOnDestroy();
//
//         expect(ngOnDestroySpy).toHaveBeenCalled();
//         expect(subscriptionSpy.unsubscribe).toHaveBeenCalled();
//     });
// });
