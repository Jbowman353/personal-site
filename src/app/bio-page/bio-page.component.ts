import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio-page',
  templateUrl: './bio-page.component.html',
  styleUrls: ['./bio-page.component.scss']
})
export class BioPageComponent implements OnInit {

  images = [
    {
      "previewImageSrc": "assets/about-pics/1.jpg",
      "thumbnailImageSrc": "assets/about-pics/1.jpg",
    },
    {
      "previewImageSrc": "assets/about-pics/2.jpeg",
      "thumbnailImageSrc": "assets/about-pics/2.jpeg",
    },
    {
      "previewImageSrc": "assets/about-pics/3.jpeg",
      "thumbnailImageSrc": "assets/about-pics/3.jpeg",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
