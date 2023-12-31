import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IGameCard } from 'src/app/models/game-card.model';
import { IImageData } from 'src/app/models/images.model';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit, OnChanges {
  @Input() imagesList: IImageData[] = [];
  @Input() showLoading: boolean = true;
  @Input() username: string = '';
  public cardsList: IGameCard[] = [];
  public forceHideCards: boolean = false;
  public tempAnimals: string[] = [];
  public savedAnimals: string[] = [];
  public blockGame: boolean = false;
  public errorCounter: number = 0;
  public successCounter: number = 0;
  public gameFinished: boolean = false;

  constructor(public readonly toastService: ToastService) {}

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
        altText:
          selectedImage.fields.image.alt_text ||
          `${selectedImage.fields.image.title} image`,
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

  getFlipCard = (animal: string): void => {
    this.tempAnimals.push(animal);
    this.checkCardMatch();
  };

  checkCardMatch = (): void => {
    if (this.tempAnimals.length == 2) {
      if (this.tempAnimals[0] === this.tempAnimals[1]) {
        // It's a match!
        this.savedAnimals.push(this.tempAnimals[1]);
        this.tempAnimals = [];
        this.successCounter++;
        this.toastService.show(`¡Felicidades, ${this.username}! Es correcto`, {
          classname: 'bg-success text-light',
          delay: 3000,
        });

        // Finish game
        this.gameFinished = this.imagesList.length === this.savedAnimals.length;
      } else {
        this.blockGame = true;
        this.forceHideCards = false;
        this.tempAnimals = [];
        this.errorCounter++;
        this.toastService.show('Oh no, te has equivocado :(', {
          classname: 'bg-danger text-light',
          delay: 3000,
        });

        // Timeout and flip back
        setTimeout(() => {
          this.blockGame = false;
          this.forceHideCards = true;
        }, 2000);
      }
    }
  };

  isAnimalSaved = (animal: string): boolean => {
    return this.savedAnimals.includes(animal);
  };
}
