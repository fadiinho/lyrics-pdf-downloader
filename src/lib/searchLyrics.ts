const API_URL = 'https://lyrics-api-gvem.onrender.com';

interface Song {
    artist: string;
    songName: string;
    lyrics: string;
}

export default async (title: string) => {
  const response = await fetch(`${API_URL}/search/title/${encodeURIComponent(title)}`).catch((error) =>  console.error(error.message) );

  if (!response) {
    throw new Error('Something went wrong on the search');
  };

  const json = await response.json();

  if (!json.ok || !json.data.length) {
    throw new Error('Song not found');
  }

  return json.data as Song[];
}
