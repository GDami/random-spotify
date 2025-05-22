import { Component, OnInit } from '@angular/core';
import { FetchSpotifyService } from '../fetch-spotify.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    private _myData:any;
    constructor(private fetchSpotifyService: FetchSpotifyService) {}

    ngOnInit() {
        //
    }

    get songName() { return this._myData}

    fetchRandom() {
        this.fetchSpotifyService.getRandomSong().subscribe((data:any) =>{
            this._myData = data.tracks.items[Math.floor(Math.random() * data.tracks.items.length)]
            console.log(this.songName)
        })
    }
}
