import {Component, OnInit, Input, ViewEncapsulation, Output,EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {cardToggle, cardClose, cardIconToggle} from './card-animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [cardToggle, cardClose, cardIconToggle],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit,OnChanges {
  @Input() headerContent: string;
  @Input() title: string;
  @Input() blockClass: string;
  @Input() cardClass: string;
  @Input() classHeader = false;
  @Input() cardOptionBlock = false;
  @Input() isLoader = false;
  @Input() Tooltip:string;
  @Output() notifyGraph:EventEmitter<boolean> = new EventEmitter<boolean>();


  ngOnChanges(changes: SimpleChanges){
    if(changes['isLoader'] && changes['isLoader'].currentValue){
      this.isLoader = true;
      this.cardLoad = 'card-load';
      
    }else{
      this.isLoader = false;
      this.cardLoad = '';
      
    }
   
  }
  cardToggle = 'expanded';
  cardClose = 'open';
  fullCard: string;
  fullCardIcon: string;
  loadCard = false;
  isCardToggled = false;
  cardLoad: string;
  cardIconToggle: string;

  constructor() {
    this.fullCardIcon = 'fa-expand';
    this.cardIconToggle = 'an-off';
  }

  ngOnInit() {
    if (this.cardOptionBlock) {
      this.cardToggle = 'false';
    }
  }

  toggleCard(event) {
    this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
  }

  toggleCardOption() {
    this.isCardToggled = !this.isCardToggled;
    this.cardIconToggle = this.cardIconToggle === 'an-off' ? 'an-animate' : 'an-off';
  }

  closeCard(event) {
    this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
  }

  fullScreen(event) {
    this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
    this.fullCardIcon = this.fullCardIcon === 'fa-expand' ? 'fa-compress' : 'fa-expand';
  
  }

  cardRefresh() {
   
    setTimeout( () => {
      this.cardLoad = '';
      this.isLoader = false;
    }, 5000);
  }
}
