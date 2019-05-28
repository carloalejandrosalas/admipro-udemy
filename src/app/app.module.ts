import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos principales
import { AppRoutingModule } from './app-routing.module';
import { PagesModule  } from "./pages/pages.module";
import { FormsModule } from '@angular/forms';
import { ServiceModule } from "./services/service.module";

// Componentes principales
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
