import { Component, OnInit, output, ViewEncapsulation } from '@angular/core';
import { FetchSpotifyService } from '../fetch-spotify.service';
import { JsonPipe } from '@angular/common';
import { catchError, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-main-button',
//   imports: [JsonPipe],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.css',
})
export class MainButtonComponent implements OnInit {
    private _songData:any;
    constructor(private fetchSpotifyService: FetchSpotifyService) {}
    onSongFetched = output<Object>()
    
    private _currentFetch:Observable<Object> | null = null;

    ngOnInit() {
        this.initKeyPressBehavior()
        this.initMouseLeaveBehavior()
    }

    get songName() { return this._songData}

    initKeyPressBehavior() {
        let element = document.getElementById("main-button")
        element?.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                element.classList.add("pressed")
            }
        })
        element?.addEventListener("keyup", (e) => {
            if (e.key == "Enter") {
                element.classList.remove("pressed")
            }
        })
    }

    initMouseLeaveBehavior() {
        let element = document.getElementById("main-button")
        element?.addEventListener("mouseleave", (e) => {
            element.blur()
        })
    }

    fetchRandom() {
        if (this._currentFetch) { 
            console.log("already fetching !")
        } else {
            this._currentFetch = this.fetchSpotifyService.getRandomSong()
            this._currentFetch
            .pipe(
            catchError((error: any) => {
                this._currentFetch = null
                throw error
            }))
            .subscribe({
                next: (data:any) =>{
                    this._songData = data.tracks.items[Math.floor(Math.random() * data.tracks.items.length)]
                    this.onSongFetched.emit(this._songData)
                    this._currentFetch = null
                },
                error: (error) => {
                    console.error(error)
                }
            })
        }
    }
}
