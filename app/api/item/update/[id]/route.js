// app/api/item/update/[id]/route.js

import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"

export async function PUT(request) {
    const reqBody = await request.json()
    try{
        await connectDB()
        return NextResponse.json({message: "アイテム編集成功"})
    }catch(err){
        return NextResponse.json({message: "アイテム編集失敗"})
    }
}