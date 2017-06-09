import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from '../app/employee';


@Pipe({
  name: 'genderNameFilter'
})
export class GenderNameFilterPipe implements PipeTransform {

 transform(value: Employee[], filterBy?: any): Employee[] {
    filterBy = (filterBy)? filterBy.toLocaleLowerCase() : null;
    return(filterBy)?value.filter(
      (emp: Employee) =>
     emp.employeeName.toLocaleLowerCase().indexOf(filterBy)!==-1 || emp.Gender.toLocaleLowerCase().indexOf(filterBy)!==-1 ): value;
  }

}
