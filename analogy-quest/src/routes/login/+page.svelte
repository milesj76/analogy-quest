<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<section>
    <h1>Sign In</h1>

    <form action="">
        <label for="">Email</label>
        <input type="email" />

        <label for="">Password</label>
        <input type="password" />

        <button type="submit">Sign In</button>
    </form>
</section>