<script lang="ts">
    import type { ActionData, PageData } from './$types';
    
    // export let data: PageData;
    export let form: ActionData;
</script>

<section class="w-full grid-template my-4 items-center">
    <div class="col-start-2 col-span-1 flex flex-col justify-center items-center space-y-8">
        <h1 class="text-5xl">Sign In</h1>
        
        <form method="post" class="flex flex-col space-y-2 text-xl">
            <label for="">Email
                <input type="email" name="email" />
            </label>
        
            <label for="">Password
                <input type="password" name="password" />
            </label>
        
            <button type="submit" class="bg-green-400 hover:bg-green-300 rounded-md text-lg py-2">Sign In</button>
        </form>

        {#if form?.error}
        <div>
            <p>{form?.error}</p>
        </div>
        {/if}
    </div>
</section>

<style>
    .grid-template {
        @apply grid grid-cols-[1fr_2fr_1fr] grid-rows-1;
    }
    
    input {
        @apply border rounded-md text-base p-2;
    }

    label {
        @apply flex flex-col gap-2;
    }
</style>