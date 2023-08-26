import axios from "axios";
import { UserDataModel } from "../models/UserDataModel";
import { AddressModel } from "../models/AddressModel";

export class UserService {
    private static URL: string = "http://localhost:3005/api";

    public static getAllUsers() {
        let userURL = `${this.URL}/users`;
        return axios.get(userURL);
    }

    public static registerUser(info: UserDataModel) {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const body = JSON.stringify(info);

        return axios.post(`${this.URL}/register`, body, config);
    }

    public static addAddress(info: AddressModel, userId: number) {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const body = JSON.stringify({...info, userId});

        return axios.post(`${this.URL}/add-address`, body, config);
    }
}