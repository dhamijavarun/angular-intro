import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from '../app/employee';


@Pipe({
  name: 'genderFilter'
})
export class GenderFilterPipe implements PipeTransform {

  transform(value: Employee[], filterBy?: any): Employee[] {
    filterBy = (filterBy)? filterBy.toLocaleLowerCase() : null;
    return(filterBy)?value.filter(
      (emp: Employee) =>
      emp.Gender.toLocaleLowerCase().indexOf(filterBy)!==-1): value;
  }

}
