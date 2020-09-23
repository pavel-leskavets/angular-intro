import {ClipInfo} from './clip-info';

export interface YoutubeResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  };
  items: ClipInfo[];
}
