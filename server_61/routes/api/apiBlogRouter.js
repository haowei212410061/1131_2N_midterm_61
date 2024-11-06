import express from 'express'
const router = express.Router()

import db from '../../utils/database.js'

router.get('/', async (req, res) => {
  try {
    const results = await db.query(`select * from menu_61`)
    res.json(results.rows)
  } catch (error) {
    console.log(error)
  }
})

export default router
