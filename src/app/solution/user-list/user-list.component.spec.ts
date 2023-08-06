import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {UserListComponent} from './user-list.component';
import {UserService} from './users.service';
import {CountryService} from './country.service';
import {mockCountryData, mockExpectedResult, mockUsers} from "./mock-data";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('UserListComponent', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;
    let userService: UserService;
    let countryService: CountryService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [],
            imports: [HttpClientTestingModule,UserListComponent],
            providers: [UserService, CountryService],
          schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load users and user card data', async () => {
        userService = TestBed.inject<UserService>(UserService);
        countryService = TestBed.inject<CountryService>(CountryService);
        spyOn(userService['http'], 'get').and.returnValue(of(mockUsers));
        spyOn(UserService.prototype as any, 'getUsers').and.returnValue(of(mockUsers));
        // spyOn(countryService['http'], 'get').and.returnValue(of(mockCountryData));
        component.ngOnInit();
        // const users = spyOn(component['users$'] as any, 'subscribe')
        expect(userService.getUsers).toHaveBeenCalled();
        // expect(countryService.getCountry).toHaveBeenCalled();

        expect(countryService.getCountry).toHaveBeenCalledWith('United States');
        // expect(users).toBe([mockExpectedResult]);
    });

    it('should unsubscribe onDestroy', () => {

        const ngOnDestroySpy = spyOn(component['onDestroy$'], 'coplete').and.callThrough();

        // Replace 'users$' and any other subscriptions with the mock subscriptionSpy
        component.users$ = of(mockExpectedResult); // You can replace this with a mock observable

        component.ngOnDestroy();

        expect(ngOnDestroySpy).toHaveBeenCalled();
    });
});
