import { createModel } from '@rematch/core';
import type { RootModel } from '.';
import { Message } from '../types';
import type { Patient } from '../types/api';
import { MessageCollection } from 'sendbird';
import { bird } from '../lib/SendBird';
// import { insertMessage } from '../api/SendBird/service';

export type InitialState = {
    patients?: Patient[] | [];
    messages: Message[] | [];
    currentPatient?: Patient | null;
};

export type InputMessage = {
    text: string;
    parentId?: number | null;
};

const channelUrl = 'sendbird_group_channel_357692372_2def48770e2a26d9fcf49cf6ba1023aa0cebbf3e';
const USER_ID = 'brandon-test';
export const patient = createModel<RootModel>()({
    state: {
        patients: [],
        messages: [],
    } as InitialState,
    reducers: {
        removePatient: (state) => {
            state.currentPatient = null;
            return {
                ...state,
            };
        },
        setPatient: (state, patient: Patient) => {
            state.currentPatient = patient;
            return {
                ...state,
                patient,
            };
        },
        insertMessage: (state, message: Message) => {
            const curMessages: Message[] = state.messages;
            curMessages.push(message);
            state.messages = [...curMessages];
            return {
                ...state,
            };
        },
        replaceMessage: (state, message: Message) => {
            const curMessages: Message[] = state.messages;
            const indexToReplace = findPendingMessage(message, curMessages);
            if (indexToReplace !== -1) {
                curMessages[indexToReplace] = message;
            }
            state.messages = [...curMessages];
            return {
                ...state,
            };
        },
        setMessages: (state, messages: Message[]) => {
            state.messages = messages;
            return {
                ...state,
                messages,
            };
        },
    },
    effects: (dispatch) => ({
        async setPatientAsync() {
            await dispatch.patient.setPatient;
        },
        async connect() {
            await bird.connect(USER_ID);
        },
        async enterChannel() {
            await bird.GroupChannel.getChannel(channelUrl);
            this.loadMessages();

            const channelHandler = new bird.ChannelHandler();

            channelHandler.onMessageReceived = (targetChannel, message) => {
                this.insertMessage(message);
            };

            channelHandler.onMessageUpdated = (targetChannel, message) => {
                this.insertMessage(message);
            };

            bird.addChannelHandler('UNIQUE_HANDLER_ID', channelHandler);
        },
        async loadMessages() {
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

            return await this.getMessages(messageCollection);
        },
        async getMessages(messageCollection: MessageCollection) {
            return new Promise(() => {
                if (messageCollection.hasPrevious) {
                    // Load the previous messages when the scroll                                               // reaches the first message in the chat view.
                    messageCollection
                        .loadPrevious()
                        .then(function (messages) {
                            dispatch.patient.setMessages(messages);
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                } else {
                    messageCollection
                        .initialize(bird.MessageCollection.MessageCollectionInitPolicy.CACHE_AND_REPLACE_BY_API)
                        .onCacheResult(() => {
                            // Messages will be retrieved from the local cache.
                            // They might be too outdated or far from the startingPoint.
                        })
                        .onApiResult((_, messages) => {
                            dispatch.patient.setMessages(messages);
                        });
                }
            });
        },
        async sendMessage(message: InputMessage) {
            const params = new bird.UserMessageParams();
            params.message = message.text;
            if (message.parentId) {
                params.parentMessageId = message.parentId;
            }
            const channel = await bird.GroupChannel.getChannel(channelUrl);
            const sendingMessage = channel.sendUserMessage(params, (msg, error) => {
                if (!error) {
                    dispatch.patient.replaceMessage(msg);
                } else {
                    alert(error.message);
                }
            });
            dispatch.patient.insertMessage(sendingMessage);
        },
        async sendFileMessage(files: FileList) {
            const channel = await bird.GroupChannel.getChannel(channelUrl);

            const params = new bird.FileMessageParams();
            params.file = files[0];

            const sendingMessage = channel.sendFileMessage(params, (msg, error) => {
                if (!error) {
                    if (msg.sendingStatus !== 'succeeded' || !files[0].type) {
                        dispatch.patient.replaceMessage(msg);
                    }
                } else {
                    alert(error.message);
                }
            });
            let tempFileMessage = sendingMessage;
            if (files[0].type) {
                tempFileMessage = { ...sendingMessage, url: URL.createObjectURL(files[0]) };
            }
            dispatch.patient.insertMessage(tempFileMessage);
        },
        async init() {
            this.connect();
            this.enterChannel();
        },
    }),
});

const findPendingMessage = (message: Message, messages: Message[]) => {
    for (let i = messages.length - 1; i >= 0; i--) {
        if (messages[i].reqId === message.reqId) {
            return i;
        }
    }
    return -1;
};
