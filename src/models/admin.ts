import mongoose, { Document, Schema } from 'mongoose';

export interface IAdmin extends Document {
    name: string;
    email: string;
    password: string;
    role: 'admin';
    createdAt: Date;
  }
  
  const adminSchema: Schema<IAdmin> = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin'], default: 'admin' },
    createdAt: { type: Date, default: Date.now }
  });
  
  const AdminModel = mongoose.model<IAdmin>('Admin', adminSchema);
  export default AdminModel;