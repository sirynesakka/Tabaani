import { NextResponse } from "next/server"
import MyComponent from "../../utils/chain"

export async function POST(request) {
  const body = await request.json()
  const question = body.query
  const history = body.history ?? []

  const res = await MyComponent.call({
    question: question,
    chat_history: history.map(h => h.content).join("\n")
  })

  console.log(res.sourceDocuments)

  const links = Array.from(
    new Set(res.sourceDocuments.map(document => document.metadata.source))
  )
  return NextResponse.json({
    role: "assistant",
    content: res.text,
    links: links
  })
}