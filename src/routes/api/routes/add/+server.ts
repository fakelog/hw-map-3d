import { json } from '@sveltejs/kit';
import * as db from '$lib/server/database';

export async function POST({ request }) {
    const { routes } = await request.json();
    const newRoutes: {} = await db.addRoutesByData(routes);
    const routesId = newRoutes.key;

    return json({ routesId });
}