import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';
import { ConvertPlayerPipe } from './pipes/convert-player.pipe';
import { CurrentPlayerComponent } from './components/current-player/current-player.component';
import { WinnerComponent } from './components/winner/winner.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent,
    ConvertPlayerPipe,
    CurrentPlayerComponent,
    WinnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
