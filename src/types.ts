export interface PricingItem {
  name: string;
  pressOnly?: number;
  washAndPress?: number;
  description?: string;
}

export const PRICING_DATA: PricingItem[] = [
  {
    name: "Shalwar Kameez",
    pressOnly: 150,
    washAndPress: 250
  },
  {
    name: "Blanket (Double)",
    washAndPress: 800,
    description: "Deep clean for king/queen size"
  },
  {
    name: "Blanket (Single)",
    washAndPress: 600,
    description: "Small/Single bed size"
  },
  {
    name: "Pant Coat",
    pressOnly: 600,
    washAndPress: 1000
  },
  {
    name: "Coat",
    pressOnly: 400
  }
];
