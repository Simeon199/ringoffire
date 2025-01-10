import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, addDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {
    constructor(private firestore: Firestore) { }
    games: any;

    getGames(): Observable<any[]> {
        let gamesCollection = this.getGamesRef();
        return collectionData(gamesCollection, { idField: 'id' });
    }

    getGamesRef() {
        return collection(this.firestore, 'games');
    }

    getSingleDocRef(colId: string, docId: string) {
        return doc(collection(this.firestore, colId), docId);
    }
}
