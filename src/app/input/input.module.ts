import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './input.component';
import { InfoRoutingModule } from './input-routing.module';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, InfoRoutingModule],
})
export class InputModule {}
