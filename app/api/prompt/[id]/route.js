import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompts = await Prompt.findById(params.id).populate("creator");

    if (!prompts) return new Response("Prompts are not found", { status: 404 });

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Unable to fetch all prompts", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    await connectToDB();

    const { prompt, tag } = await request.json();

    const exisitingPrompt = await Prompt.findById(params.id);

    if (!exisitingPrompt)
      return new Response("Prompt cannot read out", { status: 404 });

    exisitingPrompt.prompt = prompt;
    exisitingPrompt.tag = tag;

    await exisitingPrompt.save();

    return new Response("Prompt is been updated", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Unable to update prompts" + error, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndDelete(params.id).populate("creator");

    return new Response("Prompt is been deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Unable to delete prompts", { status: 500 });
  }
};
