import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxGeoAutocompleteComponent } from './auto-complete.component';
import { AutoCompleteSearchService } from './auto-complete.service';
import { LocalStorageService } from './storage.service';
import { BrowserGlobalRef, GlobalRef } from './windowRef.service';



@NgModule({
  declarations: [
    NgxGeoAutocompleteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    NgxGeoAutocompleteComponent
  ],
  providers : [
    { 
      provide: GlobalRef, 
      useClass: BrowserGlobalRef 
    },
    AutoCompleteSearchService, 
    LocalStorageService]
})
export class NgxGeoAutocompleteModule {
  static forRoot(): ModuleWithProviders<NgxGeoAutocompleteModule> {
    return {
      ngModule: NgxGeoAutocompleteModule
    };
  }
}
