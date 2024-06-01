  import { Component } from '@angular/core';
  import { Carousel } from 'bootstrap';

  @Component({
    selector: 'app-pagina-home',
    standalone: true,
    imports: [],
    templateUrl: './pagina-home.component.html',
    styleUrl: './pagina-home.component.css'
  })
  export class PaginaHomeComponent {
    ngAfterViewInit(): void {
      const carouselElement = document.querySelector('#carouselExampleIndicators');
      if (carouselElement) {
        new Carousel(carouselElement);
      }

    }
  }
