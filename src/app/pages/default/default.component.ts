import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

declare const AmCharts: any;
import * as c3 from 'c3';

import '../../../assets/charts/amchart/amcharts.js';
import '../../../assets/charts/amchart/gauge.js';
import '../../../assets/charts/amchart/pie.js';
import '../../../assets/charts/amchart/serial.js';
import '../../../assets/charts/amchart/light.js';
import '../../../assets/charts/amchart/ammap.js';
import '../../../assets/charts/amchart/worldLow.js';
import '../../../assets/charts/amchart/continentsLow.js';
import { DashboardService } from '../../core/services/dashboard.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: [
    '../../../../node_modules/c3/c3.min.css',
    '../../../assets/icon/icofont/css/icofont.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class DefaultComponent implements OnInit, AfterViewInit {
  public seoCard1Data: any;
  public seoCard2Data: any;
  public seoCard1Option: any;
  public seoCard2Option: any;
  @ViewChild('seoCard1Chart') seoCard1Chart: ElementRef;
  @ViewChild('seoCard2Chart') seoCard2Chart: ElementRef;
  public seoCard1Tag: CanvasRenderingContext2D;
  public seoCard2Tag: CanvasRenderingContext2D;

  public feedbackData: any;
  public feedbackOption: any;

  public blockDetails:any;
  public blockUesrDetails:any;
  @ViewChild('issueText1') issueText1: any;
  @ViewChild('issueBar1') issueBar1: any;

  rowsTask = [];
  loadingIndicator = true;
  reorderable = true;
  temp
  analytics:any;
  leaderBoardData:any;
    options: any = {
      position: ['bottom', 'right'],
    };

    constructor(private dashboard:DashboardService) {
      this.getStatsData();
      
      this.fetchBlockData((data) => {  
        debugger
        this.blockDetails = data;
      });
      this.fetchTaskData((data) => {
        this.rowsTask = data;
        this.temp = [...data];
      });
      
      this.fetchAnalyticsData((data) => {
        this.analytics = data;
      
      });
    
      this.fetchLeaderBoardData((data) => {
        
        this.leaderBoardData = data;
      
      });

    }
    updateFilter(event,key) {
       debugger  
      let filterdata;
      const val = event.target.value.toLowerCase();
      // filter our data
      if(key=='priority'){
        filterdata = this.temp.filter(function(d) {
          return d.priority.toLowerCase().indexOf(val) !== -1 || !val;
        });
      }else if(key=='assigned'){
        filterdata = this.temp.filter(function(d) {
          return d.assigned.toLowerCase().indexOf(val) !== -1 || !val;
        });
      }else if(key=='status'){
        filterdata = this.temp.filter(function(d) {
          return d.status.toLowerCase().indexOf(val) !== -1 || !val;
        });
      }
      
      // update the rows
      this.rowsTask = filterdata;
    }
  
  ngOnInit() {
  
  }

getStatsData(){
this.dashboard.getStats().subscribe(res=>{
  this.blockDetails = res;
})
}


getTaskData(){
  this.dashboard.getStats().subscribe(data=>{
    this.rowsTask = data;
    this.temp = [...data];
  })
  }

getanallytics()
{

} 
getLeaderBoard(){


} 
  fetchBlockData(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/block.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
  fetchTaskData(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/issue-list.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
  fetchAnalyticsData(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/analytics.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
  
  fetchLeaderBoardData(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/leaderboard.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  ngAfterViewInit() {
    setTimeout(() => {
    AmCharts.makeChart('visitor-list-graph', {
        'type': 'serial',

        'theme': 'light',
        'dataDateFormat': 'YYYY-MM-DD',
        'precision': 2,
        'valueAxes': [{
          'id': 'v1',
          'title': 'Visitors',
          'position': 'left',
          'autoGridCount': false,
          'labelFunction': function(value) {
            return '$' + Math.round(value) + 'M';
          }
        }, {
          'id': 'v2',
          'title': 'New Visitors',
          'gridAlpha': 0,
          'position': 'right',
          'autoGridCount': false
        }],
        'graphs': [{
          'id': 'g3',
          'valueAxis': 'v1',
          'lineColor': '#a8d1ff',
          'fillColors': '#a8d1ff',
          'fillAlphas': 1,
          'type': 'column',
          'title': 'old Visitor',
          'valueField': 'sales2',
          'clustered': false,
          'columnWidth': 0.5,
          'legendValueText': '[[value]]M',
          'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]M</b>'
        }, {
          'id': 'g4',
          'valueAxis': 'v1',
          'lineColor': '#4099ff',
          'fillColors': '#4099ff',
          'fillAlphas': 1,
          'type': 'column',
          'title': 'New visitor',
          'valueField': 'sales1',
          'clustered': false,
          'columnWidth': 0.3,
          'legendValueText': '$[[value]]M',
          'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]M</b>'
        }, {
          'id': 'g1',
          'valueAxis': 'v2',
          'bullet': 'round',
          'bulletBorderAlpha': 1,
          'bulletColor': '#FFFFFF',
          'bulletSize': 5,
          'hideBulletsCount': 50,
          'lineThickness': 2,
          'lineColor': '#2ed8b6',
          'type': 'smoothedLine',
          'title': 'Last Month Visitor',
          'useLineColorForBulletBorder': true,
          'valueField': 'market1',
          'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
        }, {
          'id': 'g2',
          'valueAxis': 'v2',
          'bullet': 'round',
          'bulletBorderAlpha': 1,
          'bulletColor': '#FFFFFF',
          'bulletSize': 5,
          'hideBulletsCount': 50,
          'lineThickness': 2,
          'lineColor': '#FF5370',
           'type': 'smoothedLine',
          'dashLength': 5,
          'title': 'Average Visitor',
          'useLineColorForBulletBorder': true,
          'valueField': 'market2',
          'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
        }],
        'chartCursor': {
          'pan': true,
          'valueLineEnabled': true,
          'valueLineBalloonEnabled': true,
          'cursorAlpha': 0,
          'valueLineAlpha': 0.2
        },
        'categoryField': 'date',
        'categoryAxis': {
          'parseDates': true,
          'dashLength': 1,
          'minorGridEnabled': true
        },
        'legend': {
          'useGraphSettings': true,
          'position': 'top'
        },
        'balloon': {
          'borderThickness': 1,
          'cornerRadius': 5,
          'shadowAlpha': 0
        },
        'dataProvider':  this.analytics
      });



      const chart1 = c3.generate({
        bindto: '#chartbar',
        data: {
            x : 'x',
            columns: [
              this.blockDetails.trendLineData.month,
              this.blockDetails.trendLineData.reportCount,
            ],
            type: 'bar'
        },
        axis: {
            x: {
                type: 'category',
                tick: {
           //         rotate: 75,
                    multiline: false
                },
                height: 130
            }
        }
    });


     

        const chartpie1 = c3.generate({
          bindto: '#chartpie1',
          data: {
            // iris data from R
            columns: [
              ['Heigh',  this.blockDetails.newRequest[0]],
              ['Mid', this.blockDetails.newRequest[1]],
              ['Low', this.blockDetails.newRequest[2]],
            ],
            type: 'pie',
         
          },
          color: {
            pattern: ['#ff869a', '#ffcb80','#59e0c5']
          },
        });
  

        const chartpie2 = c3.generate({
          bindto: '#chartpie2',
          data: {
            columns: [
              ['Heigh',  this.blockDetails.bug[0]],
              ['Mid', this.blockDetails.bug[1]],
              ['Low', this.blockDetails.bug[2]],
            ],
            type: 'pie',
          },
          color: {
            pattern: ['#ff869a', '#ffcb80','#59e0c5']
          },
        });


        
        const chartpie3 = c3.generate({
          bindto: '#chartpie3',
          data: {
            // iris data from R
            columns: [
              ['Heigh',  this.blockDetails.issue[0]],
              ['Mid', this.blockDetails.issue[1]],
              ['Low', this.blockDetails.issue[2]],
            ],
            type: 'pie',
          
          },
          color: {
            pattern: ['#ff869a', '#ffcb80','#59e0c5']
          },
        });
      /* seo card end */
    }, 75);
  }

 

}

function e(h, g, i) {
  if (i == null) {
    i = 'rgba(0,0,0,0)';
  }
  return {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [{
      label: '',
      borderColor: h,
      borderWidth: 2,
      hitRadius: 0,
      pointHoverRadius: 0,
      pointRadius: 3,
      pointBorderWidth: 2,
      pointHoverBorderWidth: 12,
      pointBackgroundColor: '#fff',
      pointBorderColor: h,
      pointHoverBackgroundColor: h,
      pointHoverBorderColor: '#000',
      fill: true,
      backgroundColor: i,
      data: g,
    }]
  };
}


