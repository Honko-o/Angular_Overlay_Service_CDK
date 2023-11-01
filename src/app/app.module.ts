import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ScreenComponent } from './screen/screen.component';
import {OverlayModule} from "@angular/cdk/overlay";
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ScreenComponent,
    OverlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, AngularSvgIconModule.forRoot(),
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
