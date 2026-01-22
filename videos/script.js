const songs = [];
songs.push(new Song("Two-Headed Boy", "Neutral Milk Hotel", "Aeroplane Over the Sea", 1998, "Folk", "neutral.webp", "TudLjZ_4VhU"));

//on page load
songs.forEach((song)=>{
    document.getElementById("gallery").append(song.card);
});

document.getElementById("close").onclick = () => {
  document.getElementById("modal").style.display = "none";
}