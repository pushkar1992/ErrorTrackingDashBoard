import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ruleCategory'
})
export class RuleCategoryPipe implements PipeTransform {

  transform(value: any, ruleCategory?: any): any {
    if(value==='BUREAU_ANOMALY'){
      return  "BUREAU ANOMALY";
    } else if(value==='BUREAU_NEGATIVE'){
      return  "BUREAU NEGATIVE";
    }  else if(value==='SHERLOCK_ANOMALY'){
      return  "SHERLOCK ANOMALY";
    }  else if(value==='SHERLOCK_NEGATIVE'){
      return  "SHERLOCK NEGATIVE";
    }  else if(value==='SHERLOCK_KYC'){
      return  "SHERLOCK KYC";
    }  else if(value==='VELOCITY'){
      return  "VELOCITY";
    }  else if(value==='OTHER'){
      return  "OTHER";
    } 
  }

}
