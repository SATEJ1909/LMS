import { Schema, model, Document, Types } from 'mongoose';

interface CourseContent {
  title: string;
  videoUrl: string;
  duration: string;
}


export interface Course extends Document {
  title: string;
  description?: string;
  thumbnail?: string;
  price: number;
  content: CourseContent[];
  createdBy: Types.ObjectId; 
  createdAt: Date;
}

const courseSchema = new Schema<Course>({
  title: { type: String, required: true },
  description: String,
  thumbnail: String,
  price: { type: Number, default: 0 },
  content: [
    {
      title: { type: String },
      videoUrl: { type: String },
      duration: { type: String },
    },
  ],
  createdBy: { type: Schema.Types.ObjectId, ref: 'Admin', required: true },
  createdAt: { type: Date, default: Date.now },
});


const CourseModel = model<Course>('Course', courseSchema);
export default CourseModel;
