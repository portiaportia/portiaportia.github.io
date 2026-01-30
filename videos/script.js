const songs = [];
songs.push(new Song("Two-Headed Boy", "Neutral Milk Hotel", "Aeroplane Over the Sea", 1998, "Folk", "neutral.webp", "TudLjZ_4VhU"));
songs.push(new Song("Jailhouse Rock", "Elvis Presley", "Elvis's Golden Records", 1957, "Rock","jailhouse.jpeg", "gj0Rz-uP4Mk"));
songs.push(new Song("So What", "Miles Davis", "Kind of Blue", 1959, "Jazz","so-what.jpg", "zqNTltOGh5c"));
songs.push(new Song("Jolene", "Dolly Parton", "Jolene", 1974, "Country", "jolene.jpg", "Ixrje2rXLMA-8"));

//on page load
songs.forEach((song)=>{
    document.getElementById("gallery").append(song.card);
});

document.getElementById("close").onclick = () => {
  document.getElementById("modal").style.display = "none";
}