import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './views/home/home.component';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {NgOptimizedImage} from "@angular/common";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormationCardComponent} from "./components/formation-card/formation-card.component";
import {FormationCardSkeletonComponent} from "./components/formation-card-skeleton/formation-card-skeleton.component";
import {NoResultComponent} from "./components/no-result/no-result.component";
import {FormationCardChipsComponent} from "./components/formation-card-chips/formation-card-chips.component";
import {TruncatePipe} from "./pipes/truncate.pipe";
import {SafePipe} from "./pipes/safe.pipe";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    FormationCardComponent,
    FormationCardSkeletonComponent,
    NoResultComponent,
    FormationCardChipsComponent,
    TruncatePipe,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
