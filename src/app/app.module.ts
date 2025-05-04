import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; 

@NgModule({
  providers: [
    provideHttpClient(withInterceptorsFromDi()) 
  ]
})
export class AppModule {}
