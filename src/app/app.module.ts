import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';
import { ConvertPlayerPipe } from './pipes/convert-player.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent,
    ConvertPlayerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
