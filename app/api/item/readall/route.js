// app/api/item/readall/route.js

import { NextResponse } from "next/server"
import connectDB from "../../../utils/database"

export async function GET() {
    connectDB()
    return NextResponse.json({message: "アイテム読み取り成功（オール）"})
}