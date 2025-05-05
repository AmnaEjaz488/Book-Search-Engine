import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserDocument extends Document {
  _id: string;
  username: string;
  email: string;
  password: string;
  savedBooks: any[]; // Adjust type if needed
  isCorrectPassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<UserDocument>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedBooks: [
    {
      bookId: { type: String, required: true },
      title: { type: String, required: true },
      authors: [String],
      description: String,
      image: String,
      link: String,
    },
  ],
});

// Hash user password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Custom method to validate password
userSchema.methods.isCorrectPassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

const User = model<UserDocument>('User', userSchema);
export default User;
