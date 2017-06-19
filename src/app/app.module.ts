import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { FilesService } from './files.service';
import { FilesComponent } from './files/files.component';


const ROUTES = [
  {
    path: '',
    redirectTo: 'files',
    pathMatch: 'full'
  },
  {
    path: 'files',
    component: FilesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [FilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
