"use server";

import { formSchema } from "@/src/modules/prediction/schemas/form.schema";
import { actionClient } from "../../src/lib/safe-action";

export const serverAction = actionClient
  .inputSchema(formSchema)
  .action(async ({ parsedInput }) => {
    return {
      success: true,
      message: "Form submitted successfully",
    };
  });
