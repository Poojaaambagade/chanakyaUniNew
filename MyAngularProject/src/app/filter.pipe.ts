import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tableData: any, searchText: any): any {
    console.log('tableData', tableData);     //  tableData me table ka data ayega pura
    console.log('searchtext', searchText);   //  searchtext : serch box me jo type kroge vohh
    if(!searchText) return tableData;
    let search = searchText.toLowerCase();
    return tableData.filter((element: any) => {
      return JSON.stringify(element).toLowerCase().includes(search)
    })
  }
}



