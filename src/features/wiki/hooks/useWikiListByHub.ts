import { useEffect, useState } from 'react';
import { WikiPageResponse } from '@/features/wiki/types';
import { fetchWikiListByHub } from '@/features/wiki/services/wikiService';

export const useWikiListByHub = (hubId: number) => {
    const [data, setData] = useState<WikiPageResponse[]>([]);
    // const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!hubId) {
            setData([]);
            // setLoading(false);
            return;
        }
        fetchWikiListByHub(hubId)
            .then((res) => {
                setData(res); 
            })
            .catch(setError)
            .finally(() => {
                // setLoading(false); 
            });
    }, [hubId]);
    return {data, error};
}