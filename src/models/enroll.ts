import mongoose, { Document, Schema } from 'mongoose';

export interface IEnrollment extends Document {
  user: mongoose.Types.ObjectId;
  course: mongoose.Types.ObjectId;
  purchasedAt: Date;
}

const enrollmentSchema: Schema<IEnrollment> = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  purchasedAt: { type: Date, default: Date.now }
});

const EnrollmentModel = mongoose.model<IEnrollment>('Enrollment', enrollmentSchema);
export default EnrollmentModel;