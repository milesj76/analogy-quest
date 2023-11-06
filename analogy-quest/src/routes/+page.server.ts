import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
    if (locals.user) {
        return {
            user: locals.user
        }
    }

    return {};
}) satisfies PageServerLoad;