<script lang="ts">
    import "../app.css"
    import type { LayoutData } from './$types';
    
    // export let data: LayoutData;
</script>

<div class="min-h-screen">
    <nav>
        <a href="/">Analogy Quest</a>

        <div>
            <a href="/login">Sign In</a>
        </div>
    </nav>

    <slot />
</div>

<style>
    nav {
        @apply w-full bg-slate-200 flex justify-between py-4 px-8;
    }
</style>