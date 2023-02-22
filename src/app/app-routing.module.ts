import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { SelectiveStrategy } from './selective-strategy';
import { AuthGuard } from './users/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {
        path: 'tasks',
        canActivate: [AuthGuard],
        data: {preload: true},
        loadChildren: () =>
        import('./tasks/task.module').then(m => m.TaskModule)
      },
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ],
    {preloadingStrategy: SelectiveStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
