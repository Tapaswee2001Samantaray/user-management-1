import { Pool } from 'pg';

const pool = new Pool();

interface QueryResultType {
  rows: any[];
}

export const query = (text: string, params?: any[]): Promise<QueryResultType> => pool.query(text, params);