import { ICity } from './../domain/ICity';
import Axios from 'axios';

export abstract class CitiesApi {
    private static axios = Axios.create(
        {
            baseURL: "https://localhost:44345/api/v1.0/Cities",
            headers: {
                common: {
                    'Content-Type': 'application/json'
                }
            }
        }
    )

    static async getAll(jwt: string): Promise<ICity[]> {
        const url = "";
        try {
            const response = await this.axios.get<ICity[]>(url, { headers: { Authorization: 'Bearer ' + jwt } });
            if (response.status === 200) {
                return response.data;
            }
            return [];
        } catch (error) {
            return [];
        }
    }

    static async get(id: string, jwt: string): Promise<ICity> {
        const url = "" + id;
        try {
            const response = await this.axios.get<ICity>(url, { headers: { Authorization: 'Bearer ' + jwt } });
            if (response.status === 200) {
                return response.data;
            }
            return {} as ICity;
        } catch (error) {
            return {} as ICity;
        }
    }

    static async create(entity: ICity, jwt: string): Promise<ICity> {
        const url = ""
        try {
            const response = await this.axios.post<ICity>(url, entity, { headers: { Authorization: 'Bearer ' + jwt } });
            if (response.status === 200) {
                return response.data;
            }
            return {} as ICity;
        } catch (error) {
            return {} as ICity;
        }
    }

    static async edit(entity: ICity, id: string, jwt: string): Promise<ICity> {
        const url = "" + id;
        try {
            const response = await this.axios.put<ICity>(url, entity, { headers: { Authorization: 'Bearer ' + jwt } });
            if (response.status === 200) {
                return response.data;
            }
            return {} as ICity;
        } catch (error) {
            return {} as ICity;
        }
    }

    static async delete(id: string, jwt: string): Promise<void> {
        const url = "" + id;
        try {
            const response = await this.axios.delete<ICity>(url, { headers: { Authorization: 'Bearer ' + jwt } });
        } catch (error) {
        }
    }
}
