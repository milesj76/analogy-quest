<script lang="ts">
    import "../app.css"
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>

<div class="min-h-screen">
    <nav>
        <a href="/">Analogy Quest</a>

        <div class="flex gap-4">
            {#if data.username}
            <a href="/new">New Analogy</a>
            <form action="/signin?/signOut" method="POST">
                <button>Sign Out</button>
            </form>

            {:else}
            <a href="/signin">Sign In</a>
            {/if}

        </div>
    </nav>

    <slot />
</div>

<style>
    nav {
        @apply w-full bg-slate-200 flex justify-between py-4 px-8;
    }
</style>