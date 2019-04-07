import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {TranslateService} from "./translate.service";
import { TranslatePipe } from './translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TranslateService,
    TranslatePipe,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
