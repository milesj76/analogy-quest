<script lang="ts">
  import type { PageData } from "./$types";
  import { page } from "$app/stores";

  export let data: PageData;
</script>

<div class="w-full flex flex-col items-center justify-center space-y-4 py-8">
  <h1 class="text-4xl">Analogy Quest</h1>
  <p>A site dedicated to using analogies to help us understand!</p>

  
  {#if data?.username}
  <p>You're signed in!</p>
  <a href="/analogies" class="btn">Look at new analogies!</a>
  {:else}
  <p>Sign in to contribute or vote!</p>
  <a href="/signin" class="btn">Sign In</a>
  {/if}

</div>

<style>
  .btn {
    @apply p-2 bg-green-400 rounded-md;
  }
</style>