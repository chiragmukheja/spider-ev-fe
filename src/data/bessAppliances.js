export const appliances = [
  { id: 'ac1', label: '1 AC (1.5 Ton)', icon: '🌡️', watts: 1500, category: 'residential' },
  { id: 'ac2', label: '2 ACs (1.5T each)', icon: '🌡️', watts: 3000, category: 'residential' },
  { id: 'geyser', label: 'Geyser', icon: '🚿', watts: 2000, category: 'residential' },
  { id: 'mixer', label: 'Mixer Grinder', icon: '🍳', watts: 750, category: 'residential' },
  { id: 'lights', label: 'Lights & Fans', icon: '💡', watts: 300, category: 'residential' },
  { id: 'tv', label: 'TV + Set-top Box', icon: '📺', watts: 200, category: 'residential' },
  { id: 'fridge', label: 'Refrigerator', icon: '❄️', watts: 250, category: 'residential' },
  { id: 'laptop', label: 'Laptops / Router', icon: '💻', watts: 200, category: 'residential' },
  { id: 'lift', label: 'Lift / Elevator', icon: '🏗️', watts: 5000, category: 'commercial' },
  { id: 'commercial_full', label: 'Full Commercial Load', icon: '🏢', watts: 20000, category: 'commercial' },
];

export const getRecommendation = (totalWatts) => {
  if (totalWatts === 0)    return null;
  if (totalWatts <= 3000)  return 'spidervault-3';
  if (totalWatts <= 5500)  return 'spidervault-5';
  if (totalWatts <= 12000) return 'spidervault-12';
  if (totalWatts <= 20000) return 'spidervault-20';
  if (totalWatts <= 30000) return 'spidervault-30';
  if (totalWatts <= 60000) return 'spidervault-60';
  return 'spidervault-120';
};
