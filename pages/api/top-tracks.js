const { getTopTracks } = require('@/lib/spotify');

module.exports = async (req, res) => {
  const response = await getTopTracks();

  if (response.status === 204 || response.status > 400) {
    return res.status(500).json({ message: 'Issues getting top tracks' });
  }

  const { data: items } = await response;
  const tracks = items.slice(0, 10).map(track => ({
    artist: track.artists.map(_artist => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name
  }));

  return res.status(200).json({ tracks });
};
