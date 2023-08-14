import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { GameBoardComponent } from './components/game-board/game-board.component';

@NgModule({
  declarations: [AppComponent, ImageCardComponent, GameBoardComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
