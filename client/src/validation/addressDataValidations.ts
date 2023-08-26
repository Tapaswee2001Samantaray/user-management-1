import { toast } from 'react-toastify';
import { AddressModel } from '../models/AddressModel';

const validStreetAddress = (street: string) => {
    const trimmedStreet = street.trim();
    if (!trimmedStreet) {
        toast.warn("street address is mandatory");
        return false;
    };

    return true;
}

const validCity = (city: string) => {
    if (!city) {
        toast.warn("city is mandatory");
        return false;
    };

    return true;
}

const validState = (state: string) => {
    if (!state) {
        toast.warn("state is mandatory");
        return false;
    };

    return true;
}

const validZipCode = (zip: string) => {
    if (!zip) {
        toast.warn("zip code is mandatory");
        return false;
    };

    if (zip.length != 6) {
        toast.warn("zip code should be 6 digits");
        return false;
    };
    return true;
}

export const addressDataValidation = (data: AddressModel) => {
    return validStreetAddress(data.streetAddress) && validCity(data.city) && validState(data.state) && validZipCode(data.zipCode);
}