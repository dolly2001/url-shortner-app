import express from "express";
import { urlModel } from "../models/model.js";


export const createUrl = async (req, res) => {
    try {
        const { fullUrl } = req.body

        const checkUrl = await urlModel.findOne({ fullUrl })

        if (checkUrl) {
            return res.status(400).json({
                message: "URL Already exist",
                success: false
            })
        } else {
            const createUrl = await urlModel.create({ fullUrl })
            res.status(201).send(createUrl)
        }

    } catch (error) {
        console.log("Error in creating URL-->", error)
    }
}



export const getAllUrl = async (req, res) => {
    try {
        const shortUrls = await urlModel.find().sort({createdAt : -1});
        if (!shortUrls) {
            res.status(404).send({ message: "Short URL Not Found!" })
        } else {
            res.status(200).send(shortUrls)
        }
    } catch (error) {
        console.log("Error in fetching all short URLs-->", error)
    }
}

export const getUrl = async (req, res) => {

    // const {url} = req.params.id
    try {
        const shortUrl = await urlModel.findOne({ shortUrl: req.params.id })
        if (!shortUrl) {
            res.status(404).json({
                message: "Url not found!",
                success: false
            })
        } else {
            shortUrl.clicks++;
            shortUrl.save();
            res.redirect(`${shortUrl.fullUrl}`)
        }
    } catch (error) {
        console.log("Error in getting single url-->", error)
    }
}

export const deleteUrl = async (req, res) => {
    try {
        const deleteUrl = await urlModel.findByIdAndDelete({_id : req.params.id})
        if(deleteUrl){
            res.status(200).json({
                message : "URL Successfully deleted"
            })
        }
    } catch (error) {
        console.log("Error in deleting URLs", error)
    }
}