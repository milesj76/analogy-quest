<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="w-full flex flex-col items-center justify-center space-y-4">
  <h1>Analogy Quest</h1>
  <p>A site dedicated to using analogies to help us understand!</p>

  
  {#if data?.user}
  <p>You're signed in!</p>
  {:else}
  <div>
    <p>Sign in to contribute or vote!</p>
    <a href="/login" class="btn">Sign In</a>
  </div>
  {/if}

</div>

<style>
  .btn {
    @apply p-2 bg-green-400 rounded-md;
  }
</style>