import * as mongoose from "mongoose";

export const databaseProviders = [
{
    provide: "DATABASE_CONNECTION",
    useFactory: async(): Promise<typeof mongoose> => await mongoose.connect(process.env.DATABASE_DEV || 'mongodb+srv://calvinbukarani:gi0HhfrWCQwj55yc@devcluster.icfoodw.mongodb.net/igitego')
}
]