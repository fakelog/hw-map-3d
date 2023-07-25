import { connectionsStore } from "$lib/stores/connections";
import { ConnectionsUtils } from "$lib/utils/ConnectionsUtils"


export async function getShareConnections(): Promise<Array<string[]>> {

    try {
        const connectionsUtils = new ConnectionsUtils();

        // Subscribe to the connectionsStore using Promise to wait for the initial value
        const connections: Array<string[]> = await new Promise((resolve) => {
            const unsubscribe = connectionsStore.subscribe((value) => {
                const cleanedUpConnections = connectionsUtils.getCleanupConnections(value);
                resolve(cleanedUpConnections);
                unsubscribe(); // Unsubscribe after getting the initial value
            });
        });

        return connections;
    } catch (error) {
        console.error("Error while getting share connections:", error);
        return [];
    }
}