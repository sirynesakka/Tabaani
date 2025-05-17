import connectDB from "../../../lib/mongodb";
import Ajout from "../../../models/ajout";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {  newCategory: category ,newCategory2: category2,newCategory3: category3,newCategory4: category4,newCategory5: category5, } = await request.json();
  await connectDB();
  await Ajout.findByIdAndUpdate(id, { category,category2,category3,category4,category5});
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectDB();
  const ajout = await Ajout.findOne({ _id: id });
  return NextResponse.json({ ajout }, { status: 200 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await Ajout.findByIdAndDelete(id);
  return NextResponse.json({ message: "publication supprimé" }, { status: 200 });
}
