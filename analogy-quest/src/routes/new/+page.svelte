<script lang="ts">
    import type { ActionData, PageData } from './$types';
    
    export let data: PageData;
    export let form: ActionData;
</script>

<section class="w-screen flex flex-col items-center justify-center space-y-4 py-8">
    <h1 class="text-4xl">New Analogy</h1>
    <div class="min-h-[2em]">
        {#if form?.error }
            <p>{form?.error}</p>
        {/if}
        {#if form?.success }
            <p>Your analogy was successfully submitted!</p>
        {/if}
    </div>
    <form method="post" class="flex flex-col px-20 space-y-2 w-full">
        <label for="topic">Topic</label>
        <input type="text" name="topic" />

        <label for="analogy">Analogy</label>
        <textarea name="analogy" placeholder="Enter your analogy here..." />
        <button class="max-w-fit bg-green-400 p-2 rounded-md">Submit</button>
    </form>
</section>

<style>
    label {
        @apply text-lg py-2;
    }

    input, textarea {
        @apply border rounded-md text-lg p-2;
    }

    textarea {
        @apply min-h-[30rem];
    }
</style>