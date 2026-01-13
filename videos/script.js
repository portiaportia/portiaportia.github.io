const happySongs = new Object();
happySongs["Happy by Pharrell Williams"] = "ZbZSe6N_BXs";
happySongs["Don't Stop me now by Queen"] = "HgzGwKwLmgM";
happySongs["Can't Stop this Feeling by Justin Timberlake"] = "0Ui-QzihJGo";
happySongs["Don't Worry be Happy by Bobby McFerrin"] = "d-diB65scQU";
happySongs["I'm Walking on Sunshine by Katrina & the Waves"] = "iPUmE-tne5U";

const sadSongs = new Object();
sadSongs["Happier Than Ever by Billie Eilish"] ="5GJWxDKyk3A";
sadSongs["Someone You Loved by Lewis Capaldi"] = "zABLecsR5UE";
sadSongs["Someone Like You by Adele"] = "hLQl3WQQoQ0";
sadSongs["Fix You by Coldplay"] = "k4V3Mo61fJM";
sadSongs["Hurt by Johnny Cash"] = "SnEVnvWUJgM";

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

  for(let song in songList){
    let p = document.createElement("p");
    let a = document.createElement("a");
    a.innerHTML = song;
    a.href="#";
    p.append(a);
    list.append(p);

    a.onclick = (e) => {
        e.preventDefault();
        videoPlayer.classList.remove("hidden");
        console.log(song);

        videoPlayer.src = `https://www.youtube.com/embed/${songList[song]}`;
    }
  }
}
