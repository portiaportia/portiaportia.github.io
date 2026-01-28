class Song {
    constructor(title, artist, album, year, genre, coverArt, YouTubeCode) {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.year = year;
        this.genre = genre;
        this.coverArt = coverArt;
        this.YouTubeCode = YouTubeCode;
    }

    get card() {
        const section = document.createElement("section");
        section.classList.add("song");

        //header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        const artistP = document.createElement("p");
        artistP.innerHTML = `By ${this.artist}`;
        section.append(artistP);

        section.append(this.picture(this.coverArt));

        section.onclick = () => {
            document.getElementById("modal").style.display = "block";
            document.querySelector("#modal-data h3").innerHTML = this.title;
            document.querySelector("#modal-data #artist").innerHTML = `by ${this.artist}`;
            document.querySelector("#album").innerHTML = `${this.album}, ${this.year}`;
            document.querySelector("#genre").innerHTML = `${this.genre} Music`;
            document.querySelector("#video").src = `https://www.youtube.com/embed/${this.genre}`;
        };

        return section;
    }

    picture(filename) {
        const img = document.createElement("img");
        img.src = `images/${filename}`;
        return img;
    }

    paragraph(key, value) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${key}:</strong> ${value}`;
        return p;
    }
}