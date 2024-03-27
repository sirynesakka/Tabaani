import connectDB from "../../../lib/mongodb";
import Ajout from "../../../models/ajout";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newLocationvalue: locationValue, newCategory: category ,newCategory2: category2, newTitle: title, newDescription: description } = await request.json();
  await connectDB();
  await Ajout.findByIdAndUpdate(id, { category,category2,title, description ,locationValue});
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
