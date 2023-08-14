import { Component, Input, OnInit } from '@angular/core';
import { IGameCard } from 'src/app/models/game-card.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  @Input() gameCardInfo: IGameCard = {} as IGameCard;

  ngOnInit(): void {
    console.log('gameCardInfo', this.gameCardInfo);
  }
}
