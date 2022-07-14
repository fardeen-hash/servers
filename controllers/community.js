import CommunitySchema  from "../models/community.js";
import mongoose from "mongoose";



export const createCommunity = async(req, res) => {
    const post =req.body;
    console.log(post);
    const newPost = new CommunitySchema(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (error){
        res.status(409).json({message: error.message});
    }
}

export const getCommunity = async(req, res) =>{
    try{
        const postMessages = await CommunitySchema.find();
        // console.log(postMessages);
        res.status(200).json(postMessages);
    }
    catch(error){
        res.status(404).json({message: error.message});
        

    }
}