<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<section class="w-full grid-template my-4 items-center">
    <div class="col-start-2 col-span-1 flex flex-col justify-center items-center space-y-8">
        <h1 class="text-5xl">Sign In</h1>
        
        <form action="" class="flex flex-col space-y-2">
            <label for="">Email</label>
            <input type="email" />
        
            <label for="">Password</label>
            <input type="password" />
        
            <button type="submit" class="bg-green-400 rounded-md text-lg py-2">Sign In</button>
        </form>
    </div>
</section>

<style>
    .grid-template {
        @apply grid grid-cols-[1fr_2fr_1fr] grid-rows-1;
    }
</style>