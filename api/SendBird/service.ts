import { MessageCollection, BaseMessageInstance, GroupChannel } from 'sendbird';
import { bird } from '../../lib/SendBird';
// import { patient } from '../../models/patient';

type MessageType = BaseMessageInstance;

type InitialState = {
    userId: string;
    messages?: MessageType[];
    channel?: GroupChannel;
    messageMap: { [key: string]: boolean };
};

const state: InitialState = {
    userId: 'doge',
    messages: [],
    messageMap: {},
};

const channelUrl = 'sendbird_group_channel_357692372_2def48770e2a26d9fcf49cf6ba1023aa0cebbf3e';
const USER_ID = 'brandon-test';

export const insertMessage = (message: BaseMessageInstance) => {
    state.messages?.push(message);
    return state;
};

export const connect = async () => {
    await bird.connect(USER_ID);
};

export const enterChannel = async () => {
    await bird.GroupChannel.getChannel(channelUrl);
    loadMessages();

    const channelHandler = new bird.ChannelHandler();

    channelHandler.onMessageReceived = (targetChannel, message) => {
        insertMessage(message);
    };

    channelHandler.onMessageUpdated = (targetChannel, message) => {
        insertMessage(message);
    };

    bird.addChannelHandler('UNIQUE_HANDLER_ID', channelHandler);
};

export const loadMessages = async () => {
    const channel = await bird.GroupChannel.getChannel(channelUrl);

    const messageFilter = new bird.MessageFilter();
    const startingPoint = Date.now();
    const messageCollectionFetchLimit = 100;
    const messageCollection: MessageCollection = await channel
        .createMessageCollection()
        .setFilter(messageFilter)
        .setStartingPoint(startingPoint)
        .setLimit(messageCollectionFetchLimit)
        .build();

    return await getMessages(messageCollection);
};

export const getMessages = async (messageCollection: MessageCollection) => {
    return new Promise((resolve) => {
        messageCollection
            .initialize(bird.MessageCollection.MessageCollectionInitPolicy.CACHE_AND_REPLACE_BY_API)
            .onCacheResult(() => {
                // Messages will be retrieved from the local cache.
                // They might be too outdated or far from the startingPoint.
            })
            .onApiResult((_, messages) => {
                // Messages will be retrieved from the Sendbird server through API.
                // According to the MessageCollectionInitPolicy.CACHE_AND_REPLACE_BY_API,
                // the existing data source needs to be cleared
                // before adding retrieved messages to the local cache.
                const messageMap: { [key: string]: boolean } = {};
                messages.forEach((message) => {
                    messageMap[message.messageId] = true;
                });
                resolve(messages);
            });
    });
};

export const sendMessage = async (message: string, parentId?: number | null) => {
    const params = new bird.UserMessageParams();
    params.message = message;
    if (parentId) {
        params.parentMessageId = parentId;
    }
    const channel = await bird.GroupChannel.getChannel(channelUrl);
    const sendingMessage = channel.sendUserMessage(params, (msg, error) => {
        if (!error) {
            insertMessage(msg);
        } else {
            alert(error.message);
        }
    });

    insertMessage(sendingMessage);
};

export const sendFileMessage = async (files: FileList) => {
    const channel = await bird.GroupChannel.getChannel(channelUrl);

    const params = new bird.FileMessageParams();
    params.file = files[0];

    const sendingMessage = channel.sendFileMessage(params, (msg, error) => {
        if (!error) {
            insertMessage(msg);
        } else {
            alert(error.message);
        }
    });
    insertMessage(sendingMessage);
};

export const init = async () => {
    connect();
    enterChannel();
};
