import SendBird from 'sendbird';

const APP_ID = '6E4A1CC7-9364-4B1D-B30A-9B899F1A9633';

export const bird = new SendBird({
    appId: APP_ID,
    localCacheEnabled: true,
});
