<script type="ts">
    import { Navbar, DarkMode, Tooltip } from 'flowbite-svelte';
    // @ts-ignore
    import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'

    const discordTag = "Fadiinho#5739";
    let copied = false;

    let content = "Copy Discord Tag";

    const copyDiscordTag = () => {
        copied = true;
        content = "Copied Tag";

        navigator.clipboard.writeText(discordTag);
    }
</script>

<Navbar>

    <DarkMode btnClass="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 z-50"/>
    <div class="flex gap-2">
        <div class="text-center">
            <div class="w-10 h-10 text-center">
                <Tooltip content="Github Profile">
                    <a
                        class="w-10 h-10 text-gray-500 hover:text-black dark:hover:text-white"
                        href="https://github.com/fadiinho"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <DiGithubBadge/>
                    </a>
                </Tooltip>
            </div>
        </div>
        <div class="text-center ">
            <div class="w-10 h-10 text-center flex items-center">
                <Tooltip {content} 
                    tipClass={`w-32 p-2 ${copied && "border border-green-500 animate-border-pulse"} rounded-lg text-sm font-medium left-[728px] top-[54px] absolute`}
                >
                    <div
                        on:click={copyDiscordTag} on:keydown
                        on:mouseleave={() => (content = "Copy Discord Tag", copied = false)}
                        class="text-gray-500 cursor-pointer hover:text-black dark:hover:text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8" viewBox="0 0 16 16">
                          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                        </svg>
                    </div>
                </Tooltip>

            </div>
        </div>
    </div>
</Navbar>
