const happySongs = new Object();
happySongs["Happy by Pharrell Williams"] = "ZbZSe6N_BXs";

const sadSongs = new Object();
sadSongs["Happier Than Ever By Billie Eilish"] ="5GJWxDKyk3A";

document.getElementById("sel-mood").onchange = (e) => {
  const list = document.getElementById("list");
  const mood = e.currentTarget.value.toLowerCase();
  const videoPlayer = document.getElementById("video");
  videoPlayer.classList.add("hidden");
  list.innerHTML = "";
  let songList = "";

  if(mood == "select"){
    list.innerHTML = "";
    return;
  } else if(mood == "happy"){
    songList = happySongs;
  } else if(mood == "sad"){
    songList = sadSongs;
  }

  for(song in songList){
    let p = document.createElement("p");
    let a = document.createElement("a");
    a.innerHTML = song;
    a.href="#";
    p.append(a);
    list.append(p);

    a.onclick = (e) => {
        e.preventDefault();
        videoPlayer.classList.remove("hidden");
        

        videoPlayer.src = `https://www.youtube.com/embed/${songList[song]}`;
    }
  }
}
