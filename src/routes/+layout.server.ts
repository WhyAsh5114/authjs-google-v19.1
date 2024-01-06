import { redirect } from '@sveltejs/kit';

const unprotectedRoutes = ['/', '/unauthorized'];

export const load = async ({ locals, url }) => {
	const session = await locals.getSession();
	if (!session && !unprotectedRoutes.includes(url.pathname)) {
		throw redirect(303, '/unauthorized');
	}
	return { session };
};
