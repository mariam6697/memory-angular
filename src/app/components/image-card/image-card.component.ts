import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import ICONS from 'src/app/constants/icons.constants';
import { IGameCard } from 'src/app/models/game-card.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  @Input() gameCardInfo: IGameCard = {} as IGameCard;
  public showImage: boolean;

  constructor(private readonly sanitizer: DomSanitizer) {
    this.showImage = false;
  }

  ngOnInit(): void {
    console.log('gameCardInfo', this.gameCardInfo);
  }

  clickCard(): void {
    this.showImage = !this.showImage;
  }

  get questionIcon(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(`${ICONS.QUESTION}`);
  }
}
