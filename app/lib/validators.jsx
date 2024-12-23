import { z } from "zod";

export const projectSchema = z.object({
    name:z.string().min(1,"name is required").max(100,"project name is maximum 100 characters long"),
    key:z.string().min(2,"name is required").max(10,"project name is maximum 10 characters long"),
    description:z.string().max(500,"description is maximum 500 characters long or sort").optional(),
})