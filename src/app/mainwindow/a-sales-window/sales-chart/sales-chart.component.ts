import { Sales } from 'src/app/mainwindow/a-pointofsale-window/sales.model';
import { Subscription } from 'rxjs';
import { SalesInteractionService } from './../../a-pointofsale-window/sales-interaction.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css']
})
export class SalesChartComponent implements OnInit  {
  searchTerm : string;
  saleso  : any;
  isLoading= false;
  private salesSubs: Subscription;
  arr: Array<any> =[];

  title :string;
  type ;
  data ;
  columnNames ;
  options;
  width :number;
  height :number;


  constructor(private salesInteractionService: SalesInteractionService) { }

  async ngOnInit() {


        this.salesInteractionService.getSalesChartInfo2().subscribe(results =>{
          results.sales.map(chart =>{
            console.log(chart._id);
            this.arr.push([+chart._id,+chart.total])
          })
        });
        await this.sleep(3000);
        this.Newchart();

    //setTimeout(() => {  console.log("World!"); }, 2000);
  }



public  Newchart(){
  console.log(this.arr);
  this.title = 'Sales Done (per Each month this year)';
    this.type = 'BarChart';
    this.data = this.arr;
    this.columnNames = ['Month', 'Sales'];
    this.options = { };
    this.width = 1150;
    this.height = 500;

}

public sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



}
