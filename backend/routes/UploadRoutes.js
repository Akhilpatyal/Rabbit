import express from 'express';
import multer from 'multer';
import cloudinary from 'cloudinary';
import streamifier from 'streamifier';
import dotenv from 'dotenv';

dotenv.config();


// cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


// multer setup using memory storage
const storage=multer.memoryStorage();
const upload=multer({storage});

// create router
