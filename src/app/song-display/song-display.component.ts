import { Component, input } from '@angular/core';

@Component({
  selector: 'app-song-display',
  imports: [],
  templateUrl: './song-display.component.html',
  styleUrl: './song-display.component.css'
})
export class SongDisplayComponent {
    songData = input<any>({})

    get songName() {
        return this.songData() ? this.songData().name : ''
    }
    get songArtists() {
        if (!this.songData()) {
            return ''
        }
        let return_array: any[] = []
        let array = this.songData().artists
        array.forEach((artist: any) => {
            return_array.push(artist.name)
        });

        return return_array.join(', ')
    }
    get songLink() {
        return this.songData() ? this.songData().external_urls.spotify : ''
    }
}
