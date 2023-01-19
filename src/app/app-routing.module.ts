import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AuthGuard } from './users/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'tasks',
       canActivate: [AuthGuard],
       loadChildren: () =>
        import('./tasks/task.module').then(m => m.TaskModule)},
        {path: '', redirectTo: 'welcome', pathMatch: 'full'},
        {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
