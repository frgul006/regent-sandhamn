import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegentUiNgModule } from '@regent/ui-ng';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RegentUiNgModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
