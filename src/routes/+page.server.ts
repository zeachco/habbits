import '$lib/server/express';
import type { PageServerLoad } from '.svelte-kit/types/src/routes/todos/$types';
import { sequence } from '@sveltejs/kit/hooks';
// import { error } from '@sveltejs/kit';

type Todo = {
	uid: string;
	created_at: Date;
	text: string;
	done: boolean;
	pending_delete: boolean;
};

let count = 0;

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
	console.log(locals.userid, request.url);

	count++;

	return {
		count,
		locals,
		params,
		platform,
		// request,
		routeId,
		// setHeaders,
		// url,
		// parent,
		// depends,
		// getClientAddress,
	};
};
