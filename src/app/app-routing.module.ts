import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {NotFoundComponent} from "./views/not-found/not-found.component";
import {formationResolver} from "./resolvers/formations.resolver";

const routes: Routes = [
  {path: '', component: HomeComponent, resolve: {
      //formations : FormationsResolver
      //formations : () => inject(FormationService).searchByParam(0,20,{})
      formations : formationResolver
    }
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
