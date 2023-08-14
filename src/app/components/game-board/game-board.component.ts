import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IGameCard } from 'src/app/models/game-card.model';
import { IImageData } from 'src/app/models/images.model';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit, OnChanges {
  @Input() imagesList: IImageData[] = [];
  @Input() showLoading: boolean = true;
  cardsList: IGameCard[] = [];

  ngOnInit(): void {
    this.createCards(this.imagesList);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['imagesList']) {
      this.createCards(this.imagesList);
    }
  }

  createCards = (images: IImageData[]): void => {
    // Create local array for cards
    const cards: IGameCard[] = [];

    // Duplicate images
    const duplicatedImages: IImageData[] = [...images, ...images];

    for (let index = 0; index < duplicatedImages.length; index++) {
      let selectedImage = duplicatedImages[index];
      cards.push({
        imageUrl: selectedImage.fields.image.url,
        id: index,
        animal: selectedImage.meta.name,
        altText: selectedImage.fields.image.alt_text,
      });
    }

    this.randomizeCards(cards);
  };

  randomizeCards = (cards: IGameCard[]): void => {
    // Create deep copy of array
    const auxCards = [...cards];

    // Randomize with Fisher-Yates algorithm
    for (let index = auxCards.length - 1; index > 0; index--) {
      const aux = Math.floor(Math.random() * index);
      const swappedItem = auxCards[index];
      auxCards[index] = auxCards[aux];
      auxCards[aux] = swappedItem;
    }

    this.cardsList = auxCards;
  };
}
