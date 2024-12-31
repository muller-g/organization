import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

export const request = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const requestAuth = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});