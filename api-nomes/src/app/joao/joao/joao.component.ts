import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { NomeService } from '../nome.service';


@Component({
  selector: 'app-joao',
  templateUrl: './joao.component.html',
  styleUrls: ['./joao.component.scss']
})

export class JoaoComponent implements OnInit {

  value = '';

  constructor(private serviceAPINome: NomeService) {
    Chart.register(...registerables);
  }
  
  @ViewChild("meuCanvas1", { static: true })
  elemento1!: ElementRef;

  label!: string[];
  data!: number[];

  ngOnInit(){
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

  buscaPorNome() {

    this.label = [];
    this.data = [];

    this.serviceAPINome.getByName(this.value).subscribe(
      valores => {
        console.log(valores)
        console.log(valores.res)
        valores.res.forEach(element => {
        this.label.push(element.periodo);
        this.data.push(element.frequencia);
      }
        
      );}
  )}
  
}




