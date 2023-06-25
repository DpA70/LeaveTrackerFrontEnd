import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString : string) {
    const arr = value;
    if(value.length == 0 || filterString === ''){
      return arr;
    }
      
    const data = [];
      for(const val of value){
        if(val['empId'] === filterString){
          data.push(val);
        }
      }
    return data;
  }

}
