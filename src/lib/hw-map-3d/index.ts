class HwMap3d {
    private baseURL: string = 'https://hwmap3d-1-r9011989.deta.app';

    private async post(endpoint: string, data: any) {
        const response = await fetch(`${this.baseURL}/${endpoint}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
            },
        });

        return response;
    }

    public async addRoutes(routes: any) {
        const response = await this.post('routes/add', { routes: routes });

        return await response.json();
    }
}

export { HwMap3d };