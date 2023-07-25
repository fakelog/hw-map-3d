export class ConnectionsUtils {

    public getCleanupConnection(connection: string) {
        const cleanedConnections: string[] = connection
            .split(" > ")
            .filter(Boolean)
            .filter((value) => value.length === 2);

        return cleanedConnections;
    }

    public getLinks(arr: Array<string>, links: { source: string, target: string }[]) {
        arr.forEach((_source, index) => {
            const _target = arr[index + 1]
            if (_target) {
                links.push({ source: _source, target: _target })
            }
        })
    }
}