"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createRemoteJob = async (
  state: any,
  form: FormData,
  pitch: string
) => {
  const session = await auth();
  if (!session) {
    return parseServerActionResponse({
      status: "ERROR",
      error: "Not authenticated",
    });
  }

  const { title, description, category, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key !== "pitch")
  );

  const slug = slugify(title as string, { lower: true });

  try {
    const remoteJob = {
      title,
      description,
      category,
      link,
      slug: {
        current: slug,
        _type: slug,
      },
      author: {
        _type: "reference",
        _ref: session?.id,
      },
      pitch,
    };
    const result = await writeClient.create({
      _type: "remotejob",
      ...remoteJob,
    });
    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);
    return parseServerActionResponse({
      status: "ERROR",
      error: "An unexpected error has occurred",
    });
  }
};
