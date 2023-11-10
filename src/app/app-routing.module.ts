import {inject, NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {NotFoundComponent} from "./views/not-found/not-found.component";
import {formationResolver} from "./resolvers/formations.resolver";
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {authGuard, AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent, resolve: {
      //formations : FormationsResolver
      //formations : () => inject(FormationService).searchByParam(0,20,{})
      formations : formationResolver
    }
  },
  {path: 'dashboard', component: DashboardComponent, /*canActivate: [AuthGuard]*/
    canActivate: [authGuard]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
