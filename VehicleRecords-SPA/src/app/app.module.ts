import { EditRecordComponent } from './admin-actions/edit-record/edit-record.component';
import { CreateRecordComponent } from './admin-actions/create-record/create-record.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VehicleSelectionComponent } from './vehicle-selection/vehicle-selection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule, MatInputModule, MatCardModule, MatTableModule, MatButtonModule, MatToolbarModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DeleteRecordComponent } from './admin-actions/delete-record/delete-record.component';

@NgModule({
   declarations: [
      AppComponent,
      VehicleSelectionComponent,
      LoginComponent,
      NavbarComponent,
      CreateRecordComponent,
      EditRecordComponent,
      DeleteRecordComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatSelectModule,
      MatInputModule,
      FormsModule,
      MatCardModule,
      FlexLayoutModule,
      MatTableModule,
      MatButtonModule,
      MatToolbarModule,
      RouterModule.forRoot([
   {path: 'login', component: LoginComponent},
   {path: 'vehicle-selection', component: VehicleSelectionComponent},
   {path: 'create', component: CreateRecordComponent},
   {path: 'edit', component: EditRecordComponent},
   {path: 'delete', component: DeleteRecordComponent}
   ]) ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
