import {Thumbnails} from './thumbnails';

export interface ClipInfo {
    'kind': string;
    'etag': string;
    'id': string;
    'snippet': {
        'publishedAt': string,
        'channelId': string,
        'title': string,
        'description': string,
        'thumbnails': {
            'default': Thumbnails,
            'medium': Thumbnails,
            'high': Thumbnails,
            'standard': Thumbnails,
            'maxres': Thumbnails
        },
        'channelTitle': string,
        'tags': string[],
        'categoryId': string,
        'liveBroadcastContent': string,
        'localized': {
            'title': string,
            'description': string,
        },
        'defaultAudioLanguage': string,
    };
    'statistics': {
        'viewCount': string,
        'likeCount': string,
        'dislikeCount': string,
        'favoriteCount': string,
        'commentCount': string
    };
}
