import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToggleFullScreenDirective} from './fullscreen/toggle-fullscreen.directive';
import {AccordionAnchorDirective} from './accordion/accordionanchor.directive';
import {AccordionLinkDirective} from './accordion/accordionlink.directive';
import {AccordionDirective} from './accordion/accordion.directive';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {TitleComponent} from '../layout/admin/title/title.component';
import {CardComponent} from './card/card.component';
import {CardToggleDirective} from './card/card-toggle.directive';
import {ModalBasicComponent} from './modal-basic/modal-basic.component';
import {ModalAnimationComponent} from './modal-animation/modal-animation.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {ClickOutsideModule} from 'ng-click-outside';

import { DataFilterPipe } from './pipe/data-filter.pipe';
import { LoanTypeImagePipe } from './pipe/loan-type-image.pipe';
import { FilterPipe } from './pipe/filter-pipe.pipe';
import { ChgRuleListPipe } from './pipe/chg-rule-list.pipe';
import { OrderByPipe } from './pipe/orderByFridai.pipe';
import { RuleCategoryPipe } from './pipe/rule-category.pipe';
import { MaskingPipe } from './pipe/masking.pipe';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    PerfectScrollbarModule,
    ClickOutsideModule,
  ],
  exports: [
    
    NgbModule,
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    PerfectScrollbarModule,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    ClickOutsideModule, 
   
    DataFilterPipe,
    LoanTypeImagePipe,
    FilterPipe,
    ChgRuleListPipe,
    OrderByPipe,
    RuleCategoryPipe,
    MaskingPipe
  ],
  declarations: [
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,

    DataFilterPipe,
    LoanTypeImagePipe,
    FilterPipe,
    ChgRuleListPipe,
    OrderByPipe,
    RuleCategoryPipe,
    MaskingPipe
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class  SharedModule { }
