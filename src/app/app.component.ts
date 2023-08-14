import { Component, OnInit } from '@angular/core';
import { IImageData } from './models/images.model';
import { IImageResponse } from './models/response.model';
import { ImagesService } from './services/images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'modyo-memory';
  public loadingImages: boolean;
  public intermittenceError: boolean;
  public imagesList: IImageData[];

  constructor(private readonly imagesService: ImagesService) {
    this.loadingImages = true;
    this.intermittenceError = false;
    this.imagesList = [];
  }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.imagesService.getImages(20).subscribe({
      next: async (res) => {
        this.handleImages(res);
      },
      error: (error) => this.handleError(error),
    });
  }

  handleImages(imagesResponse: IImageResponse) {
    console.log('Images:', imagesResponse.entries);
    this.imagesList = imagesResponse.entries;
    this.loadingImages = false;
  }

  handleError(error: any) {
    // Handle error
    console.log('Error:', error);
    this.loadingImages = false;
    this.intermittenceError = true;
  }
}
