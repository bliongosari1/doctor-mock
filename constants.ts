type Text = {
    [key: string]: string;
};

export const CHAT = 'Chat';
export const VIDEO_CALL = 'Video Call';
export const VOICE_CALL = 'Voice Call';
export const CANCELLED = 'Cancelled';
export const NOT_STARTED = 'Not Started';
export const UNREAD_MESSAGE = 'Unread Message';

export const APPOINTMENT_TYPES = [CHAT, VIDEO_CALL, VOICE_CALL];

export const APPOINTMENT_TEXT_COLORS: Text = {
    [CHAT]: '#8C13EC',
    [VOICE_CALL]: '#FB7292',
    [VIDEO_CALL]: '#EE9105',
    [CANCELLED]: '#C5CEE0',
};

export const APPOINTMENT_BACKGROUND_COLORS: Text = {
    [CHAT]: '#E5DCFD',
    [VOICE_CALL]: '#FCF0F3',
    [VIDEO_CALL]: '#FFEBB8',
    [CANCELLED]: '#EDF1F7',
};
