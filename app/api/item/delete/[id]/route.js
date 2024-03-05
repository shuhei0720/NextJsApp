// app/api/item/delete/[id]/route.js

import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"   // 追加

export async function DELETE(request, context) {
    try{
        await connectDB()
        await ItemModel.deleteOne({_id: context.params.id})   // 追加
        return NextResponse.json({message: "アイテム削除成功"})
    }catch(err){
        return NextResponse.json({message: "アイテム削除失敗"})
    }
}