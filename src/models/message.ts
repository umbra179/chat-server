import moongose, { ObjectId } from 'mongoose';

const Schema = moongose.Schema;

export interface IMessage extends moongose.Document {
    conversation: ObjectId,
    to: ObjectId,
    from: ObjectId,
    body: string,
    date: string
};

const MessageSchema = new Schema({
    conversation: { type: Schema.Types.ObjectId, ref: 'Conversation' },
    to: { type: Schema.Types.ObjectId, ref: 'User' },
    from: { type: Schema.Types.ObjectId, ref: 'User' },
    body: {
        type: String,
    },
    date: {
        type: String,
        default: Date.now,
    }
}, { collection: 'Message' });

const Message = moongose.model<IMessage>('Message', MessageSchema);

export default Message;