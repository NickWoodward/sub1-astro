import { z } from 'zod';

export const EnquirySchema = z.object({
  fName: z.string().trim().min(2, {message: "At least 2 letters"}),
  sName: z.string().trim().min(2, {message: "At least 2 letters"}),
  email: z.string().email().trim().toLowerCase(),
  phone: z.string().regex(new RegExp(/^[\+\(\s.\-\/\d\)]{5,30}$/), {message: "Invalid number"}),
  message: z.string().trim().min(10, {message: "At least 10 letters"}),
});

export const PlaceSchema = z.object({
  id: z.number(),
  name: z.string(),
  longitude: z.number(),
  latitude: z.number()
})

export type Enquiry = z.infer<typeof EnquirySchema>;
export type Place = z.infer<typeof PlaceSchema>;