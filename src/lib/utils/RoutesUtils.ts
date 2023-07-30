import { loadData, saveData } from "$lib/stores/localStroage";
import { routesStore } from "$lib/stores/routes";

class RoutesUtils {

    public async getSavedRoutes() {
        const routes = loadData('routes');

        return routes;
    }

    public async getRoutes(): Promise<string> {
        return new Promise((resolve) => {
            const unsubscribe = routesStore.subscribe((value) => {
                resolve(value);
            });
            unsubscribe();
        });
    }

    public saveRoutes(routes) {
        saveData('routes', routes);
    }

    public saveRoutesId(routesId: string) {
        saveData('routesId', routesId);
    }
}

export { RoutesUtils };