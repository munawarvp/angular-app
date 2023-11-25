import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './pages/counter/counter.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { HttpClientModule } from '@angular/common/http';
import { ListingComponent } from './pages/listing/listing.component';
import { BlacklistsComponent } from './components/blacklists/blacklists.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodoComponent,
    TodoInputComponent,
    ListingComponent,
    BlacklistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TodolistComponent,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
