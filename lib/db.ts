import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: "auth-db1485.hstgr.io",
  user: "u317360254_dhia",
  password: "99140777Parkour",
  database: "u317360254_transiso",
});

export async function query<T>(sql: string, params?: any[]): Promise<T[]> {
  const [rows] = await pool.execute(sql, params);
  return rows as T[];
}

export default pool;
