import { Request, Response } from "express";
import { query } from "../db";
// import { sign } from "jsonwebtoken";


export const createUser = async (req: Request, res: Response) => {
    try {
        const { first_name, last_name, phone_number, email, password, date_of_birth } = req.body;

        if (!first_name) {
            return res.status(400).json({ status: "Fail", message: "First Name is required." });
        }

        if (!last_name) {
            return res.status(400).json({ status: "Fail", message: "Last Name is required." });
        }

        if (!phone_number) {
            return res.status(400).json({ status: "Fail", message: "Phone number is required." });
        }

        if (!email) {
            return res.status(400).json({ status: "Fail", message: "Email is required." });
        }

        if (!password) {
            return res.status(400).json({ status: "Fail", message: "Email is required." });
        }

        if (!date_of_birth) {
            return res.status(400).json({ status: "Fail", message: "DOB is required." });
        }

        try {
            await query(`SELECT insert_user($1, $2, $3, $4, $5, $6)`, [first_name, last_name, phone_number, email, password, date_of_birth]);

            return res.status(201).json({
                status: "Success",
                message: "User Created Successfully."
            });
        } catch (error: any) {
            if (error.code === '23505' && error.constraint === 'users_email_key') {
                // Unique constraint violation for email
                return res.status(400).json({ status: "Fail", message: "Email already exists." });
            }
            return res.status(500).json({ status: "Fail", message: "An error occurred while creating the user." });
        }
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ status: "Fail", message: error.message });
    }
}




/*
//login with JWT
export const userLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({ status: "Fail", message: "Email is required." });
        }

        if (!password) {
            return res.status(400).json({ status: "Fail", message: "Password is required." });
        }

        try {
            const result = await query(`SELECT user_login($1, $2)`, [email, password]);
            
            if (!process.env.JWT_SECRET_TOKEN) {
                return res.status(500).json({ status: "Fail", message: "JWT secret token is not configured." });
            }

            const token = sign({userId: result.rows[0].user_login}, process.env.JWT_SECRET_TOKEN);

            return res.status(200).json({
                status: "Success",
                message: "Login successful",
                data: {
                    userId: result.rows[0].user_login,
                    token: token
                },
            });
        } catch (error: any) {
            if (error.message === 'Invalid email or password') {
                return res.status(401).json({ status: "Fail", message: "Invalid email or password." });
            }

            return res.status(500).json({ status: "Fail", message: "An error occurred during login." });
        }
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ status: "Fail", message: "An error occurred during login." });
    }
}
*/