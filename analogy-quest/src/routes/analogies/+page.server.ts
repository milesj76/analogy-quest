import type { PageServerLoad } from './$types';

export const load = (async ({locals}) => {
    const recentAnalogies = await locals.pb.collection('analogies').getList(1, 50, {
        sort: '-created',
        expand: 'topics.name'
    })

    console.log(recentAnalogies)

    return {
        mostRecent: recentAnalogies
    };
}) satisfies PageServerLoad;