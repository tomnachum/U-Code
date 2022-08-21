function SongsManager() {
  const _songs = {};
  const _youtube = "https://www.youtube.com/watch?v=";

  const addSong = (name, url) => {
    _songs[name] = url.split("=")[1];
    console.log(_songs);
  };

  const getSong = (name) =>
    name in _songs ? _youtube + _songs[name] : `${name} not in DB. `;

  return { addSong, getSong };
}

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

console.log(songsManager.getSong("sax")); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
