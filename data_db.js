// services/dataService.js
import { queryDB } from './db.js';

export const getKhuvuc = () => queryDB('SELECT * FROM Khuvuc');
export const getCongtrinh = () => queryDB('SELECT * FROM CongTrinh');
export const getDiaDiem = () => queryDB('SELECT * FROM Diadiem');
export const getDistanceCT = () => queryDB('SELECT * FROM DistanceCT');
export const getDistanceDD = () => queryDB('SELECT * FROM DistanceDD');
export const getLogPath = () => queryDB('SELECT * FROM LogPath');
export const getChiTietLogPath = () => queryDB('SELECT * FROM ChiTietLogPath');
export const getNguoiSuDung = () => queryDB('SELECT * FROM NguoiSuDung');
export const getLogPassword = () => queryDB('SELECT * FROM LogPassword');
