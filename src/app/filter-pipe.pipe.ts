import { Pipe, PipeTransform, Component } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value:any,args?:any): any {
    if(!value) return null;
  if(!args) return value;
  args = args.toLowerCase();
  
  return value.filter((task:any)=>{
    return JSON.stringify(task).toLowerCase().includes(args);
  })
  }



}

