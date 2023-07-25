export class ConnectionsUtils {

    public getCleanupConnections(arr: Array<string>) {
        const cleanedConnections: string[][] = arr.map((value) => {
            return value
                .split(" > ")
                .filter((val) => val.length === 2);
        });

        return cleanedConnections;
    }
}