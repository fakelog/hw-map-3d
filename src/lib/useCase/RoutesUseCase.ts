import { HwMap3d } from "$lib/hw-map-3d";
import { RoutesUtils } from "$lib/utils/RoutesUtils";


export class RoutesUseCase {
    private routesUtils = new RoutesUtils();;

    public async getRoutes() {
        const routes = await this.routesUtils.getRoutes();

        return routes;
    }

    public async saveRoutes() {
        const hwMap3d = new HwMap3d();

        const routes = await this.getRoutes();
        const routesId = await hwMap3d.addRoutes(routes);

        this.routesUtils.saveRoutes(routes);
        this.routesUtils.saveRoutesId(routesId);
    }
}