'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating social media-friendly images from project images using AI.
 *
 * - generateSocialMediaImages - A function that handles the generation of social media images.
 * - GenerateSocialMediaImagesInput - The input type for the generateSocialMediaImages function.
 * - GenerateSocialMediaImagesOutput - The return type for the generateSocialMediaImages function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSocialMediaImagesInputSchema = z.object({
  imageUri: z
    .string()
    .describe(
      "The URI of the image to be transformed, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  imageName: z.string().describe('The name of the original image file.'),
});
export type GenerateSocialMediaImagesInput = z.infer<typeof GenerateSocialMediaImagesInputSchema>;

const GenerateSocialMediaImagesOutputSchema = z.object({
  socialMediaImageUri: z
    .string()
    .describe('The URI of the generated social media image.'),
});
export type GenerateSocialMediaImagesOutput = z.infer<typeof GenerateSocialMediaImagesOutputSchema>;

export async function generateSocialMediaImages(input: GenerateSocialMediaImagesInput): Promise<GenerateSocialMediaImagesOutput> {
  return generateSocialMediaImagesFlow(input);
}

const generateSocialMediaImagePrompt = ai.definePrompt({
  name: 'generateSocialMediaImagePrompt',
  input: {schema: GenerateSocialMediaImagesInputSchema},
  output: {schema: GenerateSocialMediaImagesOutputSchema},
  prompt: `You are an expert image editor specializing in creating social media-friendly versions of images.

  The original image name is {{{imageName}}}.

  Generate a version of the image optimized for social media sharing, with a focus on visual appeal and clarity. Return a properly formatted data URI.

  Original Image: {{media url=imageUri}}
  `,
});

const generateSocialMediaImagesFlow = ai.defineFlow(
  {
    name: 'generateSocialMediaImagesFlow',
    inputSchema: GenerateSocialMediaImagesInputSchema,
    outputSchema: GenerateSocialMediaImagesOutputSchema,
  },
  async input => {
    const {output} = await generateSocialMediaImagePrompt(input);
    return output!;
  }
);
