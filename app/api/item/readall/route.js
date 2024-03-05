// app/api/item/readall/route.js

import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({message: "アイテム読み取り成功（オール）"})
}