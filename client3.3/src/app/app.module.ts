import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BlockUIModule } from 'ng-block-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashComponent } from './dash/dash.component';
import { RoutesModule } from './routes.module';
import { GroupComponent } from './group/group.component';
import { UserComponent } from './user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SubgroupComponent } from './subgroup/subgroup.component';
import { CollectionComponent } from './collection/collection.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    DashComponent,
    GroupComponent,
    UserComponent,
    SubgroupComponent,
    CollectionComponent,
    ModalComponent
  ],
  imports: [
    RoutesModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BlockUIModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    Ng2SearchPipeModule

  ],
  exports : [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
