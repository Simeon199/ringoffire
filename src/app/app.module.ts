import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogAddPlayerComponent } from './dialog-add-player/dialog-add-player.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { GameDescriptionComponent } from './game-description/game-description.component';
import { MatCardModule } from '@angular/material/card';
// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: "AIzaSyANZAayOuhwFPhubBODHRWttxma0qPdYGM",
//   authDomain: "ring-of-fire-8a257.firebaseapp.com",
//   projectId: "ring-of-fire-8a257",
//   storageBucket: "ring-of-fire-8a257.firebasestorage.app",
//   messagingSenderId: "663002228432",
//   appId: "1:663002228432:web:e85f1fad79a513ca0a20d5"
// };

// const app = initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    StartscreenComponent,
    GameComponent,
    PlayerComponent,
    DialogAddPlayerComponent,
    GameDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // AppComponent
})
export class AppModule { }
