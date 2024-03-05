// app/api/item/readsingle/[id]/route.js

import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"　// 追加

export async function GET(request, context) {
    console.log(context.params.id)       // 削除
    try{
        await connectDB()
        const singleItem = await ItemModel.findById(context.params.id)
        await ItemModel.findById(context.params.id)       // 追加
        return NextResponse.json({message: "アイテム読み取り成功（シングル）", singleItem: singleItem})
    }catch(err){
        return NextResponse.json({message: "アイテム読み取り失敗（シングル）"})
    }
}