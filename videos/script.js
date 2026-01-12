const happySongs = new Object();
happySongs["Happy by Pharrell Williams"] = "ZbZSe6N_BXs?si=HYSNWYZFZX-ug64f";

document.getElementById("sel-mood").onchange = (e) => {
  const list = document.getElementById("list");
  const mood = e.currentTarget.value.toLowerCase();
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
      console.log("clicked");
    }
  }
}
