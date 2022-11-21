import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { NomeService } from '../nome.service';


@Component({
  selector: 'app-joao',
  templateUrl: './joao.component.html',
  styleUrls: ['./joao.component.scss']
})

export class JoaoComponent implements OnInit {

  constructor(private serviceAPINome: NomeService) {
    Chart.register(...registerables);

  }
  
  @ViewChild("meuCanvas1", { static: true })
  elemento1!: ElementRef;

  label = [];
  data = [];

  value = 'Clear me';

  ngOnInit(){

    this.serviceAPINome.getByName("lancho").subscribe(
      teste => console.log(teste)
    )

    new Chart(this.elemento1.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.label,
        datasets: [
          {
            data: this.data,
            backgroundColor: ["#31a389","#0ead69", "#3bceac"],
          },

        ]
      }
    });

    var colors = ["#31a389","#0ead69", "#3bceac"];
    var colorGenerator = function (dados: string | any[], colors: any[]) {
      var varColor = []
      var count = 0;

      for(var i = 0; i < dados.length; i ++){
        varColor[i] = colors[count];
        if(count > 1){
          count = 0;
        } else{
          count++;
        }
      }
      return varColor;
  };

  }
}




