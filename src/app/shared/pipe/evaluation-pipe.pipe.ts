import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evaluationPipe'
})
export class EvaluationPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value=='CLEAR'){
      return 'APPROVED';
  }
  else if(value=='NON_CLEAR'){
     return 'REJECTED';
  }  
  }

}
