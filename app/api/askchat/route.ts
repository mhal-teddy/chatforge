import { NextRequest, NextResponse } from "next/server";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

export const POST = async (req: NextRequest) => {
  const reqBody = req.json();
  const { prompt, modelName } = await reqBody;

  const openai = new ChatOpenAI({ model: modelName, apiKey: process.env.OPENAI_API_KEY });

  const query = async (prompt: string) => {
    const messages = [
      new HumanMessage(prompt),
    ];
    const res = await openai.invoke(messages)
      .then((res) => res.content)
      .catch((err) => `LLM was unable to answer. ${err}`);
    return res;
  };

  try {
    const response = await query(prompt);
    return NextResponse.json(
      {
        answer: response, 
        error: "",
      }, { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        answer: "",
        error: error
      }, { status: 500 }
    );
  }
};