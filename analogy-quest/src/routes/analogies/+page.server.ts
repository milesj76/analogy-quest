import type { PageServerLoad } from './$types';

export const load = (async ({locals}) => {
    const recentAnalogies = await locals.pb.collection('analogies').getList(1, 20, {
        sort: '-created',
        expand: 'topic'
    })

    console.log(recentAnalogies)

    return {
        mostRecent: recentAnalogies
    };
}) satisfies PageServerLoad;