// app/api/item/update/[id]/route.js

import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"
import {ItemModel } from "../../../../utils/schemaModels"

export async function PUT(request) {
    const reqBody = await request.json()
    try{
        await connectDB()
        await ItemModel.updateOne()
        return NextResponse.json({message: "アイテム編集成功"})
    }catch(err){
        return NextResponse.json({message: "アイテム編集失敗"})
    }
}