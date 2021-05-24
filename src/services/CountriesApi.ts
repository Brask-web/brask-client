import { ICountry } from './../domain/ICountry';
import Axios from 'axios';

export abstract class CountriesApi {
    private static axios = Axios.create(
        {
            baseURL: "https://localhost:44345/api/v1.0/Countries",
            headers: {
                common: {
                    'Content-Type': 'application/json'
                }
            }
        }
    )

    static async getAll(jwt: string): Promise<ICountry[]> {
        const url = "";
        try {
            const response = await this.axios.get<ICountry[]>(url, { headers: { Authorization: 'Bearer ' + jwt } });
            if (response.status === 200) {
                return response.data;
            }
            return [];
        } catch (error) {
            return [];
        }
    }

    static async get(id: string, jwt: string): Promise<ICountry> {
        const url = "" + id;
        try {
            const response = await this.axios.get<ICountry>(url, { headers: { Authorization: 'Bearer ' + jwt } });
            if (response.status === 200) {
                return response.data;
            }
            return {} as ICountry;
        } catch (error) {
            return {} as ICountry;
        }
    }

    static async create(entity: ICountry, jwt: string): Promise<ICountry> {
        const url = ""
        try {
            const response = await this.axios.post<ICountry>(url, entity, { headers: { Authorization: 'Bearer ' + jwt } });
            if (response.status === 200) {
                return response.data;
            }
            return {} as ICountry;
        } catch (error) {
            return {} as ICountry;
        }
    }

    static async edit(entity: ICountry, id: string, jwt: string): Promise<ICountry> {
        const url = "" + id;
        try {
            const response = await this.axios.put<ICountry>(url, entity, { headers: { Authorization: 'Bearer ' + jwt } });
            if (response.status === 200) {
                return response.data;
            }
            return {} as ICountry;
        } catch (error) {
            return {} as ICountry;
        }
    }

    static async delete(id: string, jwt: string): Promise<void> {
        const url = "" + id;
        try {
            const response = await this.axios.delete<ICountry>(url, { headers: { Authorization: 'Bearer ' + jwt } });
        } catch (error) {
        }
    }
}
