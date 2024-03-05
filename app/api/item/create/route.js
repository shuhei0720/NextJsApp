// app/api/item/create/route.js

import { NextResponse } from "next/server"

export async function POST(request) {
    console.log(request)
    return NextResponse.json({message: "アイテム作成"})
}