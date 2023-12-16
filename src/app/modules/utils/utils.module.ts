import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import { DateToDayMonthYearPipe } from '../../pipes/customPipes.pipe';


@NgModule({
  declarations: [
    DateToDayMonthYearPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateToDayMonthYearPipe
  ],
})
export class UtilsModule {
}
