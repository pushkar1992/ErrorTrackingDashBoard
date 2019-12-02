import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chgRuleList'
})
export class ChgRuleListPipe implements PipeTransform {

  transform(ruleValues: any, headerList?: any): any {
    let finalRuleList = [];
    if (ruleValues) {
      headerList.forEach(element => {
        let obj = this.checkAppId(element.applicationId, ruleValues, element['inqId']);
        finalRuleList.push(obj)
      });
      return finalRuleList;
    } else {
      return ruleValues;
    }

  }

  checkAppId(appId, ruleValues, inqId) {

    for (var fieldIndex = 0; fieldIndex < ruleValues.length; fieldIndex++) {
      if (ruleValues[fieldIndex].name === appId && inqId === ruleValues[fieldIndex].inqId) {
        return ruleValues[fieldIndex];
      }
    }
    return { name: null, ruleValues: null }
  }


}
