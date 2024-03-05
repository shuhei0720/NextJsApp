// app/api/item/delete/[id]/route.js

import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"

export async function DELETE() {
    try{
        await connectDB()
        return NextResponse.json({message: "アイテム削除成功"})
    }catch(err){
        return NextResponse.json({message: "アイテム削除失敗"})
    }
}