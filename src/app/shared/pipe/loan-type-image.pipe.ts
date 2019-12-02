import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loanTypeImage'
})
export class LoanTypeImagePipe implements PipeTransform {

  transform(value: any,loanType: any): any {

    if(loanType==='IA01'){
      return  "ti-briefcase";
    }
    else if(loanType==='IA102'){
      return  "ti-briefcase";
    }
    else if(loanType==='IA12'){
      return  "ti-briefcase";
    }
    else if(loanType==='IA13'){
      return  "ti-briefcase";
    }
    else if(loanType==='IA15'){}
    else if(loanType==='IA14'){}
    else if(loanType==='IA16'){}
    else if(loanType==='IA101'){}
    else if(loanType==='IA100'){}
    else if(loanType==='IA17'){}
    else if(loanType==='IA06'){}
    else if(loanType==='IA07'){}
    else if(loanType==='IA09'){}
    else if(loanType==='IA02'){}
    else if(loanType==='IA08'){}
    else if(loanType==='IA03'){}
    else if(loanType==='IA104'){}
    else if(loanType==='IA103'){}
    else if(loanType==='IA07'){}
     else {
      return  "ti-briefcase";
     }
  }

}
