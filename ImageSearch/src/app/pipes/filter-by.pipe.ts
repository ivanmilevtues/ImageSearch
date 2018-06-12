import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(array: Array<any>, args?: any): any {
      let searchQuery = args[0];
      let filteredArr = [];
      for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array[i].tagsArray.length; k++) {
          let tag = array[i].tagsArray[k];
          if (tag.includes(searchQuery)) {
            filteredArr.push(array[i]);
            break;
          }
        }
      }
      return filteredArr;
  }

}
