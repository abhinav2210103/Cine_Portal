"use server"; 
import { NextRequest, NextResponse } from "next/server";
export async function POST(req : NextRequest) {
  try {
    const data = await req.json(); 
    const { studentNumber, password, token  } = data;
    if (!studentNumber || !password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }
    const response = await fetch(`${process.env.BACKEND_URL}/student/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ studentNumber, password, token }),
      credentials: "include",
    });
    const responseData = await response.json();
    if(!response.ok) {
      return NextResponse.json({message : responseData.message}, { status: response.status });
    }
    return NextResponse.json(responseData, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error occured! Please try again", err }, { status: 500 });
  }
}