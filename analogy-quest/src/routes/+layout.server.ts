import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
    const auth = locals.pb.authStore
    const loggedIn = auth.isValid
    // console.log(locals.pb.authStore)

    if (loggedIn) {
        return {
            username: auth.model?.username,
            email: auth.model?.email
        }
    }

    return {};
}) satisfies LayoutServerLoad;

// export const actions: Actions = {
//     signOut:
// };