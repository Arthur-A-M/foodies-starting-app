export type MealType = {
    id: number,
    slug: string,
    title: string,
    image: { // this image type is wrong
        size: Number,
        type: String,
        name: String,
        lastModified: Number
      },
    summary: string,
    instructions: string,
    creator: string,
    creator_email: string
}