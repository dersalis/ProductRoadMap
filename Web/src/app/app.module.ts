import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { TaskBoxComponent } from './components/task-box/task-box.component';

// import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    TaskBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
