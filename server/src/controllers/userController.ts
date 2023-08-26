import { Request, Response } from "express";
import { query } from "../db";

export const getUsers = async (req: Request, res: Response) => {
    try {

        const result = await query(`SELECT * FROM get_users()`);

        return res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                users: result.rows,
            }
        });
    } catch (error: any) {
        return res.status(500).json({ status: "Fail", message: error.message });
    }
};


export const addAddressForUser = async (req: Request, res: Response) => {
    try {
        const { userId, streetAddress, city, state, zipCode } = req.body;

        if (!userId) {
            return res.status(400).json({ status: "Fail", message: "User ID is required." });
        }

        if (!streetAddress) {
            return res.status(400).json({ status: "Fail", message: "Street Address is required." });
        }

        if (!city) {
            return res.status(400).json({ status: "Fail", message: "city is required." });
        }

        if (!state) {
            return res.status(400).json({ status: "Fail", message: "state is required." });
        }

        if (!zipCode) {
            return res.status(400).json({ status: "Fail", message: "Zip Code is required." });
        }

        /* //authorization
        if (userIdParam != req.token) {
            return res.status(403).send({ status: "Fail", message: "You are not authorize to add address" });
        } */

        await query(`SELECT add_address_for_user($1, $2, $3, $4, $5)`, [userId, streetAddress, city, state, zipCode]);

        return res.status(201).json({
            state: "success",
            message: "User address added successfully"
        });
    } catch (error: any) {
        return res.status(500).json({ status: "Fail", message: error.message });
    }
}



/* export const searchUsers = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;
        const page: number = req.query.page ? parseInt(req.query.page as string) : 1;
        const pageSize: number = req.query.pageSize ? parseInt(req.query.pageSize as string) : 10;

        const offSet: number = (page - 1) * pageSize;
        const limit: number = pageSize;

        const result = await query(`SELECT * FROM search_users($1, $2, $3)`, [searchTerm, offSet, limit]);

        return res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                users: result.rows,
            }
        });
    } catch (error: any) {
        return res.status(500).json({ status: "Fail", message: error.message });
    }
}
   */  



/* export const filterUsers = async (req: Request, res: Response) => {
    try {
        if (!req.query.departmentId) {
            return res.status(400).json({ status: "Fail", message: "Department ID is required" });
        }

        const departmentId: number | undefined = parseInt(req.query.departmentId as string);

        const page: number = req.query.page ? parseInt(req.query.page as string) : 1;
        const pageSize: number = req.query.pageSize ? parseInt(req.query.pageSize as string) : 10;

        const offSet: number = (page - 1) * pageSize;
        const limit: number = pageSize;

        const result = await query(`SELECT * FROM filter_users_by_department($1, $2, $3)`, [departmentId, offSet, limit]);

        return res.status(200).json({
            status: "success",
            result: result.rows.length,
            data: {
                users: result.rows,
            }
        });
    } catch (error: any) {
        return res.status(500).json({ status: "Fail", message: error.message });
    }
}
 */

