import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp({
        apiKey: "AIzaSyBbo6dNUJx73zgWTiNq-AB0SvrtSwcOlKY",
        authDomain: "ring-of-fire-7d5f5.firebaseapp.com",
        projectId: "ring-of-fire-7d5f5",
        storageBucket: "ring-of-fire-7d5f5.firebasestorage.app",
        messagingSenderId: "273221802702",
        appId: "1:273221802702:web:044e6d9c34e5533531ce9f"
      })),
      provideFirestore(() => getFirestore()),
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatIconModule,
      MatDialogModule,
      MatInputModule,
      MatCardModule
    ), provideAnimationsAsync()
  ]
};