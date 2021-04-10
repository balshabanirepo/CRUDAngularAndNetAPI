import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AccountComponent } from './account/account.component';
import { NOTFOUNDComponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { VaccinationTypeComponent } from './vaccination-type/vaccination-type.component';
import { VaccinationTypeItemComponent } from './vaccination-type-item/vaccination-type-item.component';
//import { OwnerComponent } from './owner/owner.component';
//import { NOTFOUND } from 'dns';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AccountComponent,
    NOTFOUNDComponentComponent,
    VaccinationTypeComponent,
    VaccinationTypeItemComponent
    //OwnerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'account', component: AccountComponent },
      //
      { path: '404', component: NOTFOUNDComponentComponent },
      { path: '**', redirectTo: '/404', pathMatch: 'full' },
      //{ path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) },
      

     //{ path: 'owner', component: OwnerComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
