import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of, Subject} from 'rxjs';
import {UserListComponent} from './user-list.component';
import {UserService} from './users.service';
import {CountryService} from './country.service';
import {mockCountryData, mockExpectedResult, mockUsers} from './mock-data';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('UserListComponent', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;
    let userService: UserService;
    let countryService: CountryService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [],
            imports: [HttpClientTestingModule, UserListComponent],
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

    it('should call data from userService', async () => {
        userService = TestBed.inject<UserService>(UserService);
        const userSpy = spyOn(UserService.prototype as any, 'getUsers').and.returnValue(of(mockUsers));
        component.ngOnInit();
        expect(userSpy).toHaveBeenCalled();
    });

    it('should call data from countryService', async () => {
        countryService = TestBed.inject<CountryService>(CountryService);
        const countrySpy = spyOn(CountryService.prototype as any, 'getCountry').and.returnValue(of(mockCountryData));
        component.ngOnInit();
        expect(countrySpy).toHaveBeenCalled();
    });

    it('should unsubscribe onDestroy', () => {
        const onDestroySpyNext = spyOn(Subject.prototype, 'next').and.callThrough();
        const onDestroySpyComplete = spyOn(Subject.prototype, 'complete').and.callThrough();
        component.ngOnInit();
        component.ngOnDestroy();
        expect(onDestroySpyNext).toHaveBeenCalled();
        expect(onDestroySpyComplete).toHaveBeenCalled();
    });
});
