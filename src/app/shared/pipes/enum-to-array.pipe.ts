import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
  transform(value: any, addDefaultEmpty?: boolean): any {
    const items: any[] = addDefaultEmpty
      ? [{ key: '-Please select-', value: '' }]
      : [];

    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        // const isValueProperty = parseInt(key, 10) >= 0;
        // if (!isValueProperty) continue;
        items.push({ key: key, value: value[key] });
      }
    }

    return items;
  }
}
