import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load = (async ({ locals }) => {
    const loggedIn = await locals.pb.authStore.isValid
    // console.log('is user valid?', loggedIn)

    if (loggedIn) {
        throw redirect(307, '/')
    }

    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    signIn: async ({ locals, request, cookies }) => {
        // TODO input validation!
        const body = Object.fromEntries(await request.formData())
        const { email, password } = body
        // const { email, password } = await request.json()

        console.log(body)
        console.log(email)

        if (!email) {
            return fail(400, {
                error: 'Email is missing! Must have an email entered to sign in!'
            })
        }
        if (!password) {
            return fail(400, {
                error: 'Password is missing! Must have a password entered to sign in!'
            })
        }

        try {
            await locals.pb.collection('users').authWithPassword(email as string, password as string)
        } catch (error) {
            console.log('Failed to sign in user', email)
            console.log(error)
            return { error: 'Failed to sign in! Please try again!' }
        } 

        console.log(email, 'has signed in!')        
        throw redirect(303, '/')
    },
    signOut: async ({ locals }) => {
        console.log(locals.pb.authStore.model?.username, 'has signed out!')
        locals.pb.authStore.clear()
        throw redirect(303, '/')
    }
};