import {ClipInfo} from './clip-info';

export interface YoutubeResponse {
  'kind': string;
  'etag': string;
  'pageInfo': {
    'totalResults': number,
    'resultsPerPage': number
  };
  'items': ClipInfo[];
}
