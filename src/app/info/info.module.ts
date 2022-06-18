import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { InfoService } from './info.service';

@NgModule({
  declarations: [InfoComponent],
  imports: [CommonModule, HttpClientModule, InfoRoutingModule],
  providers: [InfoService],
})
export class InfoModule {}
