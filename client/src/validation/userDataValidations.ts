import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserDataModel } from '../models/UserDataModel';

const validEmail = (email: string) => {
    if (!email) {
        toast.warn("Email is mandatory");
        return false;
    };
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,3}))$/
    if (!emailRegex.test(email)) {
        toast.warn("Invalid email");
        return false;
    }
    return true;
}

const validName = (name: string) => {
    if (!name) {
        toast.warn("Name is mandatory");
        return false;
    };

    if (name.length < 3) {
        toast.warn("Invalid name");
        return false;
    }

    let nameReg = /^[A-Za-z]+$/;
    if (!nameReg.test(name)) {
        toast.warn("Invalid name");
        return false;
    }

    return true;
}

const validNumber = (num: number) => {
    if (!num) {
        toast.warn("Phone Number is mandatory");
        return false;
    }

    const parseNum: string = num.toString();
    console.log(parseNum);

    if (parseNum.length != 10) {
        toast.warn("Invalid Phone Number");
        return false;
    }

    return true;
}

const validPassword = (password: string) => {
    if (!password) {
        toast.warn("Password is mandatory");
        return false;
    }
    if (password.length < 6) {
        toast.warn("Password is too short.");
        return false;
    }

    return true;
}

const validDOB = (dob: string) => {
    if (!dob) {
        toast.warn("DOB is mandatory");
        return false;
    }
    return true;
}


export const userDataValidation = (data: UserDataModel) => {
    return validName(data.first_name) && validName(data.last_name) && validNumber(data.phone_number) && validEmail(data.email)  && validPassword(data.password) && validDOB(data.date_of_birth);
}