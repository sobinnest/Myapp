import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { TodoComponent } from './page/todo/todo.component';
import { ContactComponent } from './page/contact/contact.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'todo',component:TodoComponent},
    {path:'contact',component:ContactComponent}
];
