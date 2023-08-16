import { Component, OnInit } from '@angular/core';
import { IImageData } from './models/images.model';
import { IImageResponse } from './models/response.model';
import { ImagesService } from './services/images.service';
import { Title } from '@angular/platform-browser';
import { LocalDataService } from './services/local-data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsernameModalComponent } from './components/modal/username-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public pageTitle: string = '¡Memoria!';
  public loadingImages: boolean;
  public intermittenceError: boolean;
  public imagesList: IImageData[];
  public username: string = '';

  constructor(
    private readonly imagesService: ImagesService,
    private readonly titleService: Title,
    private readonly localDataService: LocalDataService,
    private readonly modalService: NgbModal
  ) {
    this.titleService.setTitle(this.pageTitle);
    this.loadingImages = true;
    this.intermittenceError = false;
    this.imagesList = [];
  }

  ngOnInit(): void {
    this.getImages();
    this.getUsername();
  }

  getImages = (): void => {
    this.imagesService.getImages(20).subscribe({
      next: (res) => this.handleImages(res),
      error: (error) => this.handleError(error),
    });
  };

  handleImages = (imagesResponse: IImageResponse): void => {
    this.imagesList = imagesResponse.entries;
    this.loadingImages = false;
  };

  handleError = (error: any): void => {
    // Handle error
    console.log('Error:', error);
    this.loadingImages = false;
    this.intermittenceError = true;
  };

  getUsername = (): void => {
    this.username = this.localDataService.readData('username');

    if (!this.username) {
      // Open modal to ask for user name
      const modalRef = this.modalService.open(UsernameModalComponent, {
        backdrop: 'static',
        keyboard: false,
      });
      modalRef.componentInstance.newUsernameEvent.subscribe(
        (username: string) => {
          this.localDataService.writeData('username', username);
          this.getUsername();
        }
      );
    }
  };
}
