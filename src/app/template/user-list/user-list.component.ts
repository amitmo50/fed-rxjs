import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {CommonModule} from '@angular/common';
import {UserCardComponent} from './user-card/user-card.component';
import {UserService} from './users.service';
import {HttpClientModule} from '@angular/common/http';
import {CountryService} from './country.service';
import {UserCard} from './user-card.config';

@Component({
    selector: 'app-user-list',
    standalone: true,
    imports: [CommonModule, HttpClientModule, UserCardComponent],
    providers: [UserService, CountryService],
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
    users$!: Observable<any[]>;
    // todo: create users$ observable that will get the data from userService, add some extra data from countryService without breaking the stream
    // 1. Call the "getUsers()" method from userService
    // 2. Use Rxjs operator to map the data from userService
    // 3. Add to the previews task the relevant data from countryService, use UserCard interface to see which field we need and their names
    // 3. Run the project using "npm run start"
    // 3. Run unit test to see if there any possible problems

    // Tech note:
    // 1. Do not forget memory leak, use the subject like we talked about
    // 2. Reduce logic inside the subscription
    // 3. Use Operators to keep the stream clean and readable
    // 4. Rxjs Docs: https://www.learnrxjs.io/
    private onDestroy$ = new Subject<void>();

    constructor(private userService: UserService, private countryService: CountryService) {}

    ngOnInit(): void {
        this.users$ = this.getUsersCardDataObservable();
    }

    private getUsersCardDataObservable(): Observable<UserCard[]> {
        return of([]);
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
