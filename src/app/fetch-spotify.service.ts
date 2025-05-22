import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';


enum RequestType {
    TRACK="/tracks",

}

@Injectable({
    providedIn: 'root',
})  
export class FetchSpotifyService {
    private authUri = "https://accounts.spotify.com/api/token"
    private authHeaders = ["Content-Type", "application/x-www-form-urlencoded"]
    private authId = "fb3386a45cfa49c395a549fd2b39df73"
    private authSecret = "0999bbf9da0e420fb729859b77fae106"
    private authBody = "grant_type=client_credentials&client_id=" + this.authId + "&client_secret=" + this.authSecret
    
    private token = "";
    private tokenHeaders = new HttpHeaders();

    private spotifyUrl = "https://api.spotify.com/v1"

    
    constructor(private http: HttpClient) {

        let headers = new HttpHeaders();
        headers = headers.set(this.authHeaders[0], this.authHeaders[1])

        this.http.post(
            this.authUri,
            this.authBody,
            { headers:headers }
        )
        .subscribe((data:any) => {
            this.token = data.access_token
            this.tokenHeaders = this.tokenHeaders.set("Authorization", "Bearer " + this.token)
            console.log(this.token)
            console.log(this.tokenHeaders)
        })
    }

    getRandomSearch() {
        let characters = 'azertyuiopqsdfghjklmwxcvbn'
        let randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length))

        let randomSearch = ""

        switch(Math.round(Math.random())) {
            case 0:
                randomSearch = randomCharacter + "%"
                break;
            case 1:
                randomSearch = "%" + randomCharacter + "%"
                break;
        }
        
        return randomSearch
    }

    getRandomSong() {
        let query = this.getRandomSearch()
        let randomOffset = Math.floor(Math.random() * 950)
        // console.log(query)
        // console.log(randomOffset)
        return this.http.get(
            this.spotifyUrl + "/search",
            {
                headers: this.tokenHeaders,
                params: new HttpParams()
                    .set('q', query)
                    .set('type', 'track')
                    // .set('limit', 1)
                    .set('offset', randomOffset)
            }
        )
    }

    fetchData(type:RequestType, id:string) {

    }
}
