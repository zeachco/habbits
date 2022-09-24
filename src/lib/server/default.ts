import type { PageServerLoad } from '.svelte-kit/types/src/routes/todos/$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({
	locals,
	params,
	platform,
	request,
	routeId,
	setHeaders,
	url,
	parent,
	depends,
	getClientAddress,
}) => {
	return {
		locals,
		params,
		platform,
		routeId,
	};

	// throw error(response.status);
};
