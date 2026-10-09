import { model, Schema } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      default: '',
      required: true,
      trim: true,
    },
    content: {
      type: String,
      default: '',
      required: true,
      trim: true,
    },
     tag: {
      type: String,
      default: 'Undone',
      enum: TAGS,
    },
    rate: {
      type: Number,
      default: 1,
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

noteSchema.index({ tag: 1 }, { rate: 1 });

export const Note = model('Note', noteSchema);
