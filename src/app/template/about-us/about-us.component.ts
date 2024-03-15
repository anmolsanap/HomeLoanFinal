import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
      const carouselElement = document.getElementById('myCarousel');
      if (carouselElement) {
          carouselElement.addEventListener('slid.bs.carousel', () => {
          
              console.log('Slide changed!');
          });
      }
  }
}
