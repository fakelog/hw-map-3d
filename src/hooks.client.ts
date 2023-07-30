import { loadData, removeData, saveData } from "$lib/stores/localStroage";

const connections = loadData("connections");
if (connections) {
    if (connections.length > 0) {
        saveData("routes", connections);
    }
    removeData("connections");
}
