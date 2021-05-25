import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TodoAppComponent } from './todo-app.component';
import { MenuComponent } from './todo-app/containers/menu/menu.component';
import { HeaderComponent } from './todo-app/containers/header/header.component';
import { AllComponent } from './todo-app/containers/all/all.component';
import { ActiveComponent } from './todo-app/containers/active/active.component';
import { CompletedComponent } from './todo-app/containers/completed/completed.component';
import { TodoAppRoutingModule } from './todo-app/routing/todo-app-routing.module';
import { FooterComponent } from './todo-app/containers/footer/footer.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo-app',
    pathMatch: 'full'
  },
  {
    path: 'todo-app',
    loadChildren: () =>
      import('./todo-app/routing/todo-app-routing.module').then(m => m.TodoAppRoutingModule)
  }
];

@NgModule({
  declarations: [
    TodoAppComponent,
    MenuComponent,
    HeaderComponent,
    AllComponent,
    ActiveComponent,
    CompletedComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TodoAppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [TodoAppComponent]
})
export class TodoAppModule { }
