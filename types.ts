export interface BacheloretteOption {
  id: string;
  title: string;
  location: string;
  imageSrc: string;
  details: string[];
  costs: { label: string; value: string }[];
  availability: string;
  websiteUrl: string;
  specialNote?: string;
  isBestValue?: boolean;
  distanceFromRome?: string;
}