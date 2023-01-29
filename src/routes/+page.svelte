<script lang='ts'>
  import { Spinner } from "flowbite-svelte";
  import SearchInput from '../components/SearchInput.svelte'
  import searchLyrics from '../lib/searchLyrics';


  let lyrics: string[] = [];
  let blobUrl: string;
  let isLoading = false;
  let artist: string;
  let songName: string;

  const handleClick = async (event: CustomEvent) => {
    lyrics = [];
    artist = "";
    songName = "";
    blobUrl = "";
    const searchTerm = event.detail;
    if (!searchTerm) return;
    isLoading = true;

    const response = await searchLyrics(searchTerm);

    lyrics = [ ...response.data[0].lyrics.split('\n') ];

    isLoading = false;

    artist = response.data[0].artist;
    songName = response.data[0].songName;

    const pdfResponse = await fetch('/api/generatePdf', {
      method: 'POST',
      body: JSON.stringify({
          lyrics: lyrics.join('\n'),
          songName: response.data[0].songName,
          artist: response.data[0].artist
      })
    });

    blobUrl = URL.createObjectURL(await pdfResponse.blob());
  } 
</script>

<main class="flex flex-col justify-center items-center">
  <div class="flex flex-col sm:flex-row sm:justify-start sm:itens-center">
    <SearchInput on:click={handleClick}/>
    {#if blobUrl}
      <a 
        class="p-4 px-6 m-2 max-w-fit text-white bg-blue-700 hover:bg-blue-800 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
        href={blobUrl} 
        download={`${artist.trim()} - ${songName}.pdf`}
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a>
    {/if}
  </div>

  <div class="p-4 text-center">
    {#if isLoading}
      <Spinner class="text-blue-700" />
    {/if}
    {#if artist && songName}
        <p class="m-2 mb-8 font-bold">{artist} - {songName}</p>
    {/if}
    {#if lyrics.length}
        <div id="lyrics">
          {#each lyrics as piece}
            <span>{piece}</span>
            <br>
          {/each}
        </div>
    {/if}
  </div>
</main>
