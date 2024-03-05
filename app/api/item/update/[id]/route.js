// app/api/item/update/[id]/route.js

import { NextResponse } from "next/server"

export async function PUT() {
    return NextResponse.json({message: "アイテム編集成功"})
}