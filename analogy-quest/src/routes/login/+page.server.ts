import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load = (async ({ cookies, locals }) => {
    const loggedIn = await locals.pb.authStore.isValid

    if (loggedIn) {
        redirect(307, '/')
    }

    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ locals, request }) => {
        // TODO input validation!
        const body = Object.fromEntries(await request.formData())
        const { email, password } = body
        // const { email, password } = await request.json()

        console.log(body)
        console.log(email)

        if (!email) {
            return fail(400, {
                error: 'Email is missing! Must have an email entered to login!'
            })
        }
        if (!password) {
            return fail(400, {
                error: 'Password is missing! Must have a password entered to login!'
            })
        }

        try {
            await locals.pb.collection('users').authWithPassword(email as string, password as string)
        } catch (error) {
            console.log('Failed to login user', email)
            return { error: 'Failed to login! Please try again!' }
        } 

        console.log(email, 'has logged in!')
        throw redirect(304, '/')
    }
};