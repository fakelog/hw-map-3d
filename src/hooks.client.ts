import { loadData, removeData, saveData } from "$lib/stores/localStroage";
import { defaultConnections } from "$lib/const/defaultConnections";

const connections = loadData('connections');
if (connections) {
    if (connections.length > 0) {
        saveData('routes', connections);
    }
    removeData("connections");
}

const routes = loadData('routes');
if (!routes) {
    saveData('routes', defaultConnections);
}