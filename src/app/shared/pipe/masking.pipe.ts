import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "underscore";

@Pipe({ name: 'masking' })
export class MaskingPipe implements PipeTransform {
    transform(value, isConsortium: boolean,ruleType:string): any {
        var masked = '';
        if (isConsortium === false && ruleType ==='LOCAL') {
            let mask =[]; 
             mask = value.split('');
                    mask.splice(10,mask.length);   
            mask.forEach(element => {
                if (element != " ") {
                    masked = masked + element.replace(element, 'X');
                }
                else {
                    masked = masked + " "
                }

            });
        }else if(isConsortium === false){
            let mask =[]; 
             mask = value.split('');
                    mask.splice(10,mask.length);   
            mask.forEach(element => {
                if (element != " ") {
                    masked = masked + element.replace(element, 'X');
                }
                else {
                    masked = masked + " "
                }

            });
        }
        else{
            masked=value;
        }

        return masked;
    }
}