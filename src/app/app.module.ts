import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { ConversatioinsService } from './shared/dbAccess/conversatioins.service';
import { AuthInterceptor } from './guard/auth.inspector';
import { AuthGuard } from './guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Declares our routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login-page/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RegisterComponent } from './register/register-page/register.component';
import { HomeComponent } from './home/collab-list/home.component';
import { UserService } from './shared/dbAccess/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//These are the materials that will make our site adaptable
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';

//Angular Flex Module
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
     //Forms Modules
    ReactiveFormsModule,
    //HTTP requests
    HttpClientModule,
    BrowserAnimationsModule,
    //Material
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    ScrollDispatchModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTableModule,

    //Our Routes will be here to make code cleaner
    AppRoutingModule,

    FlexLayoutModule
   
  ],
  providers: [
    UserService,
    CollabsService,
    ConversatioinsService,
    AuthGuard,
    {
      provide :HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
