import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { NomeService } from '../nome.service';


@Component({
  selector: 'app-joao',
  templateUrl: './nome.component.html',
  styleUrls: ['./nome.component.scss']
})

export class NomeComponent implements OnInit {

  value = '';
  show = true;

  constructor(private serviceAPINome: NomeService) {
    Chart.register(...registerables);
  }

  @ViewChild("meuCanvas1", { static: true })
  elemento1!: ElementRef;
  @ViewChild("meuCanvas2", { static: true })
  elemento2!: ElementRef;

  label!: string[];
  data!: number[];

  chart1!: Chart<"doughnut", number[], string>;
  chart2!: Chart<"line", number[], string>;

  ngOnInit(){
  }

  clean(){
    this.value = '';
    this.chart1.destroy();
    this.chart2.destroy();
    this.show = true;
  }

  createChart(){

    this.chart1 = new Chart(this.elemento1.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.label,
        datasets: [
          {
            data: this.data,
            backgroundColor: ["#31a389", "#0d095d", "#9c047d", "#ff8708", "#125007", "#ff0f39", "#003daa", "#fa2019", "#2d2400"],
          },

        ]
      }
    });

    this.chart2 = new Chart(this.elemento2.nativeElement, {
      type: 'line',
      data: {
        labels: this.label,
        datasets: [
          {
            label: 'Frequências',
            data: this.data,
            backgroundColor: ["#31a389", "#0d095d", "#9c047d", "#ff8708", "#125007", "#ff0f39", "#003daa", "#fa2019", "#2d2400"],
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15
          },

        ]
      }
    });
  }

  destroy(){
    if(!this.show){
      this.chart1.destroy();
      this.chart2.destroy();
    }
  }

  buscaPorNome() {
    this.label = [];
    this.data = [];
    this.value = this.value.toLowerCase()
    this.serviceAPINome.getByName(this.value).subscribe(valores => {
      valores[0].res.forEach(element => {
      this.label.push(element.periodo);
      this.data.push(element.frequencia);
      });
      this.destroy();
      this.createChart();
      this.show = false;
    })
  }

}




