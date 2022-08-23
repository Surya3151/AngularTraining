import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetsModule } from './widgets/widgets.module';

import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    WidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent, OutputComponent]
})
export class AppModule { }
