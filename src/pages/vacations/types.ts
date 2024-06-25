import { Dispatch, SetStateAction } from 'react';

export type VacationType = {
  title: string;
  category: string;
  details: string;
  duty: string[];
  requirements: string[];
  optional: string[];
  offer: string[];
};

export type VacationCardProps = { vacation: VacationType };

export type VacationPreviewProps = Pick<VacationType, 'title'>;

export type VacationPageProps = {
  itemCount?: number;
  isCategoriesVisible?: boolean;
};

export type CategoriesProps = {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
};
