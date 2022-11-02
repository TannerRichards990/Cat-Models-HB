const pool = require('../utils/pool');
module.exports = class CartoonCat {
  id;
  name;
  type;
  
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
  }

  static async getALL() {
    const { rows } = await pool.query('SELECT * FROM cartoon_cats');
    return rows.map(row => new CartoonCat(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM cartoon_cats WHERE id=$1', [id]);
    if (!rows[0]) throw new Error(`No cartoon cat with id ${id}`);
    return new CartoonCat(rows[0]);
  }
};



