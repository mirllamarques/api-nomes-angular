import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-joao',
  templateUrl: './joao.component.html',
  styleUrls: ['./joao.component.scss']
})

export class JoaoComponent implements OnInit {

  constructor() {
    Chart.register(...registerables);
}
  @ViewChild("meuCanvas1", { static: true })
  elemento1!: ElementRef;
  @ViewChild("meuCanvas2", { static: true })
  elemento2!: ElementRef;

  ngOnInit(){
    new Chart(this.elemento1.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ["Plano Vida","Hap Saúde","Ut Mais"],
        datasets: [
          {
            data: [85,72,86],
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
    new Chart(this.elemento2.nativeElement, {
      type: 'bar',
      data: {
        labels: ["20","21","22","23","24","25","26","27","28","29","30"],
        datasets: [
          {
            data: [85,72,86,81,84,86,94,60,62,65,41],
            backgroundColor:  colorGenerator([85,72,86,81,84,86,94,60,62,65,41], colors),
          }
        ]

      }
    });
  }
}




