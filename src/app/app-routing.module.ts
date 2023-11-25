import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { TodoComponent } from './pages/todo/todo.component';
import { ListingComponent } from './pages/listing/listing.component';

const routes: Routes = [
  {path: '', component: CounterComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'listing', component: ListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
