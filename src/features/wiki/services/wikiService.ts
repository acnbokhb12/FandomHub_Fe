import axios from '@/api/axiosInstance';
import {WikiPageResponse} from '@/features/wiki/types/index';

export function fetchWikiListByHub(hubId: number): Promise<WikiPageResponse[]> {
  return axios.get(`/api/wiki`, { params: { hubId } }).then(res => res.data);
}