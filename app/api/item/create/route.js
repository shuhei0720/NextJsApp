// app/api/item/create/route.js

import { NextResponse } from "next/server"

export async function POST() {
    return NextResponse.json({message: "アイテム作成"})
}