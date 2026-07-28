import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "src", "libs", "data", "data.json");

export async function GET() {
  const file = fs.readFileSync(dataPath, "utf-8");
  const data = JSON.parse(file);
  return NextResponse.json(data);
}
