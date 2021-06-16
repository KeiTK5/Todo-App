import { AuthService } from './service/auth.service';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JwtModuleOptions, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ProjectComponent } from './project/project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { TaskComponent } from './task/task.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InfoComponent } from './admin/info/info.component';
import { AdminModule } from './admin/admin.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegisterComponent } from './admin/register/register.component';

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProjectComponent,
    TaskComponent,
    InfoComponent,
    RegisterComponent,
  ],
  imports: [
    AdminModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    DragDropModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    MatAutocompleteModule
  ],

  providers: [AuthService, AuthGuard, JwtHelperService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
