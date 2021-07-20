import moongose, { ObjectId } from 'mongoose';

const Schema = moongose.Schema;

export interface IConversation extends moongose.Document {
    members: ObjectId[],
    lastMessage: string,
    date: string
};

const ConversationSchema = new Schema({
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    lastMessage: {
        type: String,
    },
    date: {
        type: String,
        default: Date.now,
    }
}, { collection: 'Conversation' });

const Conversation = moongose.model<IConversation>('Conversation', ConversationSchema);

export default Conversation;