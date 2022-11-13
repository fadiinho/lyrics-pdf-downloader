const API_URL = 'https://lyrics-api-gvem.onrender.com';

export default async (title: string) => {
  const response = await fetch(`${API_URL}/search/title/${encodeURIComponent(title)}`).catch((error) =>  console.error(error.message) );

  if (!response) {
    throw new Error('Something went on the search');
  };

  return response.json();
}
