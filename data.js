// 疑似NIED観測点（最小）
const stations = [
  { id: "TKY", lat: 35.68, lon: 139.76 },
  { id: "OSK", lat: 34.69, lon: 135.50 },
  { id: "SND", lat: 38.26, lon: 140.87 },
  { id: "NGT", lat: 37.91, lon: 139.04 },
  { id: "FKO", lat: 33.59, lon: 130.40 }
];

// 毎回揺れを生成
const niedData = stations.map(s => {
  const pga =
    Math.random() < 0.15
      ? Math.random() * 150   // 強い揺れ
      : Math.random() * 5;    // 通常

  return {
    id: s.id,
    lat: s.lat,
    lon: s.lon,
    pga: Number(pga.toFixed(2))
  };
});
