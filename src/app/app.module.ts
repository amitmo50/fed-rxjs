import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
// import {UserListComponent} from "./solution/user-list/user-list.component";
import {CommonModule} from '@angular/common';
import {UserListComponent} from './template/user-list/user-list.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CommonModule, UserListComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
