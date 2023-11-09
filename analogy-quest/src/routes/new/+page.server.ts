import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(307, '/signin')
    }

    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())
        const { topic, analogy } = body

        console.log('topic:', topic)

        let id

        // TODO: add validation to form

        // handle new topic
        try {
            const topicExists = await locals.pb.collection('topics').getFirstListItem(`name="${topic}"`)
            console.log(topicExists, 'found in topics!')
            id = topicExists.id
        } catch (error) {
            // console.log(error)
            console.log(topic, "doesn't exist! Adding to topics.")
            const res = await locals.pb.collection('topics').create({ "name": topic })
            id = res.id
        }

        console.log('id: ', id)

        // submit analogy
        const data = {
            "topic": id,
            "analogy": analogy.toString(),
            "submittedBy": locals.pb.authStore.model?.id
        }

        try {
            await locals.pb.collection('analogies').create(data)
        } catch (error) {
            console.log(error)
            console.log('Something went wrong submitting the analogy to the server.')
            return {
                error: 'Something went wrong submitting the analogy to the server.'
            }
        }

        return {
            success: true
        }
    }
};