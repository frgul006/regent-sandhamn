import { NgModule } from '@angular/core';
import { defineCustomElements } from '@regent/ui-core/loader';
import { MyComponent, RegentButton } from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  MyComponent,
  RegentButton
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: []
})
export class RegentUiNgModule {}
