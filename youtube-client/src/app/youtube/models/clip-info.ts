import {Thumbnails} from './thumbnails';

export interface ClipInfo {
    kind: string;
    etag: string;
    id: {
        kind: string,
        videoId: string
    };
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            default: Thumbnails,
            medium: Thumbnails,
            high: Thumbnails
        },
        channelTitle: string,
        liveBroadcastContent: string
    };
}
