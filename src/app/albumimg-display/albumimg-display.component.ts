import { Component, input } from '@angular/core';

@Component({
  selector: 'app-albumimg-display',
  imports: [],
  templateUrl: './albumimg-display.component.html',
  styleUrl: './albumimg-display.component.css'
})
export class AlbumimgDisplayComponent {
    songImg = input<string>('')

    get imgSrc() {
        return this.songImg() ? this.songImg() : ''
    }
}
