import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataPolicyComponent } from './data-policy.component';
import { SharedModule } from '@app/shared/shared.module';
import { DataPolicyRoutingModule } from './data-policy-routing.module';



@NgModule({
  declarations: [
    DataPolicyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DataPolicyRoutingModule
  ]
})
export class DataPolicyModule { }
