const happySongs = new Object();
happySongs["Happy by Pharrell Williams"] = "ZbZSe6N_BXs";

document.getElementById("sel-mood").onchange = (e) => {
  const list = document.getElementById("list");
  const mood = e.currentTarget.value.toLowerCase();
  const videoPlayer = document.createElement("video");
  videoPlayer.classList.add("hidden");
  let songList = "";

  if(mood == "select"){
    list.innerHTML = "";
    return;
  } else if(mood == "happy"){
    songList = happySongs;
  } else if(mood == "sad"){
    
  }

  for(song in happySongs){
    let p = document.createElement("p");
    let a = document.createElement("a");
    a.innerHTML = song;
    a.href="#";
    p.append(a);
    list.append(p);

    a.onclick = () => {
        videoPlayer.classList.remove("hidden");
        console.log("hi");
        videoPlayer.src = `https://www.youtube.com/embed/${happySongs[song]}`;
    }
  }
}
