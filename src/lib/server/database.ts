import { Deta } from "$lib/server/deta";

export async function addRoutesByData(data: string) {
    const deta = Deta();
    const db = deta.Base('connections');
    const routes = await db.insert(data);

    return routes;
}

export async function getRoutesByKey(key: string) {
    const deta = Deta(process.env.DETA_PROJECT_KEY);
    const db = deta.Base('connections');
    const routes = await db.get(key);

    return routes;
}