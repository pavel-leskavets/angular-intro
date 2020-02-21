import {ClipInfoFromStatistics} from './clip-info-from-statistics';

export interface Statistics {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  };
  items: ClipInfoFromStatistics[];
}
