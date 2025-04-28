import express from 'express'
import cors from 'cors'    

import { getKhuvuc } from './data_db.js' 
import { getCongtrinh } from './data_db.js' 
import { getDiaDiem } from './data_db.js' 
import { getDistanceCT } from './data_db.js' 
import { getDistanceDD } from './data_db.js' 
import { getLogPath } from './data_db.js' 
import { getChiTietLogPath } from './data_db.js' 
import { getNguoiSuDung } from './data_db.js' 
import { getLogPassword } from './data_db.js' 

const app = express()
const PORT = 3001

app.use(cors())

// API: Khu vực
app.get('/khuvuc', async (req, res) => {
  try {
    const data = await getKhuvuc()
    res.json(data)
  } catch (error) {
    res.status(500).send('Lỗi lấy dữ liệu khu vực')
  }
})

// API: Công trình
app.get('/congtrinh', async (req, res) => {
  try {
    const data = await getCongtrinh()
    res.json(data)
  } catch (error) {
    res.status(500).send('Lỗi lấy dữ liệu công trình')
  }
})

// API: Địa điểm
app.get('/diadiem', async (req, res) => {
  try {
    const data = await getDiaDiem()
    res.json(data)
  } catch (error) {
    res.status(500).send('Lỗi lấy dữ liệu địa điểm')
  }
})

// API: DistanceCT
app.get('/distancect', async (req, res) => {
  try {
    const data = await getDistanceCT()
    res.json(data)
  } catch (error) {
    res.status(500).send('Lỗi lấy dữ liệu DistanceCT')
  }
})

// API: DistanceDD
app.get('/distancedd', async (req, res) => {
  try {
    const data = await getDistanceDD()
    res.json(data)
  } catch (error) {
    res.status(500).send('Lỗi lấy dữ liệu DistanceDD')
  }
})

// API: LogPath
app.get('/logpath', async (req, res) => {
  try {
    const data = await getLogPath()
    res.json(data)
  } catch (error) {
    res.status(500).send('Lỗi lấy dữ liệu LogPath')
  }
})

// API: Chi tiết LogPath
app.get('/chitietlogpath', async (req, res) => {
  try {
    const data = await getChiTietLogPath()
    res.json(data)
  } catch (error) {
    res.status(500).send('Lỗi lấy dữ liệu ChiTietLogPath')
  }
})

// API: Người sử dụng
app.get('/nguoidung', async (req, res) => {
  try {
    const data = await getNguoiSuDung()
    res.json(data)
  } catch (error) {
    res.status(500).send('Lỗi lấy dữ liệu người dùng')
  }
})

// API: LogPassword
app.get('/logpassword', async (req, res) => {
  try {
    const data = await getLogPassword()
    res.json(data)
  } catch (error) {
    res.status(500).send('Lỗi lấy dữ liệu LogPassword')
  }
})

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`)
})
