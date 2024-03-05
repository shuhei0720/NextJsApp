// app/api/item/create/route.js

import { NextResponse } from "next/server"

export async function POST(request) {
    console.log(await request.json())
    return NextResponse.json({message: "アイテム作成"})
}

mongodb+srv://shuhei0720:<password>@cluster0.oxx8nhe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0