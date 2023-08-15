import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import ICONS from 'src/app/constants/icons.constants';
import { IGameCard } from 'src/app/models/game-card.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit, OnChanges {
  @Input() gameCardInfo: IGameCard = {} as IGameCard;
  @Input() hideCard: boolean;
  @Output() newFlipEvent = new EventEmitter<string>();
  public showImage: boolean;

  constructor(private readonly sanitizer: DomSanitizer) {
    this.showImage = false;
    this.hideCard = false;
  }

  ngOnInit(): void {
    // console.log('gameCardInfo', this.gameCardInfo);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hideCard'] && this.hideCard === true) {
      this.showImage = false;
    }
  }

  clickCard(): void {
    this.showImage = !this.showImage;
    this.newFlipEvent.emit(this.gameCardInfo.animal);
  }

  get questionIcon(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(`${ICONS.QUESTION}`);
  }
}
