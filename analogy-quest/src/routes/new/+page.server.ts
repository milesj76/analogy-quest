import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(307, '/signin')
    }

    return {};
}) satisfies PageServerLoad;