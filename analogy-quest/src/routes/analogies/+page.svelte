<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="w-full px-20 py-4">
    <h1 class="text-4xl my-4">Analogies</h1>
    <ul class="flex flex-col space-y-6">
        {#each data?.mostRecent?.items as analogy}
            <li>
                <div>
                    <h2>{analogy?.expand.topic.name}</h2>
                    <p>Created on {new Date(analogy.created).toLocaleString()}</p>
                </div>
                <p>{analogy.analogy}</p>
                <button>See More</button>
            </li>
        {/each}
    </ul>
</div>