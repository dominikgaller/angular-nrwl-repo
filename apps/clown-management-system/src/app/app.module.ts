import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiKitModule } from '@dominikgaller/ui-kit';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { CreateClownComponentModule } from '@dominikgaller/clown/component/create-clown-component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './router/app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateClownComponentModule,
    UiKitModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsModule.forRoot([], { developmentMode: true,
      selectorOptions: {
        // These Selector Settings are recommended in preparation for NGXS v4
        // (See above for their effects)
        suppressErrors: false,
        injectContainerState: false
      }}),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
