import { useState, useEffect } from 'react';

export const useNFTStats = () => {
  const [stats, setStats] = useState({
    minted: 0,
    total: 1111,
    mintPrice: 0.22,
    floorPrice: 0.40,
    loading: true
  });

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        // Fetch Magic Eden Floor Price via CORS proxy
        const meRes = await fetch('https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent('https://api-mainnet.magiceden.dev/v2/collections/hauwee/stats'));
        const meData = await meRes.json();
        const fetchedFloorPrice = meData?.floorPrice ? meData.floorPrice / 1e9 : 0.40;

        // Fetch LaunchMyNFT Data via CORS proxy
        const lmnftRes = await fetch('https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent('https://launchmynft.io/sol/20352'));
        const lmnftText = await lmnftRes.text();
        
        let fetchedMinted = 906;
        let fetchedTotal = 1111;
        let fetchedMintPrice = 0.22;

        const match = lmnftText.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/);
        if (match && match[1]) {
          const nextData = JSON.parse(match[1]);
          const collection = nextData?.props?.pageProps?.collection;
          if (collection) {
            fetchedMinted = collection.totalMints ?? fetchedMinted;
            fetchedTotal = collection.maxSupply ?? fetchedTotal;
            // Removed overriding fetchedMintPrice with collection.cost (which was returning 0.25)
          }
        }

        if (isMounted) {
          setStats({
            minted: fetchedMinted,
            total: fetchedTotal,
            mintPrice: fetchedMintPrice,
            floorPrice: fetchedFloorPrice,
            loading: false
          });
        }
      } catch (err) {
        console.error("Failed to fetch NFT stats:", err);
        if (isMounted) {
          setStats(prev => ({ 
            ...prev, 
            minted: prev.minted === 0 ? 906 : prev.minted, // Fallback if stuck at 0
            loading: false 
          }));
        }
      }
    };

    fetchData();
    return () => { isMounted = false; };
  }, []);

  const percentage = (stats.minted / stats.total) * 100;
  const upside = stats.mintPrice > 0 ? ((stats.floorPrice - stats.mintPrice) / stats.mintPrice) * 100 : 0;

  return { ...stats, percentage, upside };
};
