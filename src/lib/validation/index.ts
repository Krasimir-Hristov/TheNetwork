import * as z from 'zod';

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' }),
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export const SigninValidation = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export const PostValidation = z.object({
  caption: z.string().min(1, { message: 'Caption must not be empty' }),
  file: z.custom<File[]>(),
  location: z.string().min(2, { message: 'Location must not be empty' }),
  tags: z.string().min(1, { message: 'Tags must not be empty' }),
});
