const { getNowPlaying } = require('@/lib/spotify');

module.exports = async (req, res) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const { data: song } = await response;
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map(_artist => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title
  });
};
