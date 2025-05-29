import { Component } from '@angular/core';
import { SongDisplayComponent } from "../song-display/song-display.component";
import { MainButtonComponent } from '../main-button/main-button.component';
import { AlbumimgDisplayComponent } from "../albumimg-display/albumimg-display.component";

@Component({
  selector: 'app-home',
  imports: [SongDisplayComponent, MainButtonComponent, AlbumimgDisplayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    songData:any
    songImg:string = ""


    handleSongFetched(data: any) {
        this.songData = data
        this.songImg = this.songData.album.images[0].url
    }
}
