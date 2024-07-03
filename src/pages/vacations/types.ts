export type VacationType = {
  id: number,
  position: Position;
  department: Department;
  description: string;
  responsibilities: string[];
  requirements: {
    mandatory?: string[];
    preferred?: string[];
  };
  offer: string[];
};

export type VacationCardProps = {
  vacation: VacationType;
};

export type VacationPreviewProps = Pick<VacationType, 'position'>;

export type VacationPageProps = {
  itemCount?: number;
  isCategoriesVisible?: boolean;
};

export type DepartmentsProps = {
  active: string;
  setActive: (department: string) => void;
};

export type BlockProps = {
  title?: string;
  content?: string | string[];
};

export type BlockContentProps = {
  content: string;
  component: 'div' | 'li';
};

export type Position = string

export type Department =
  | 'Video production'
  | 'Development'
  | 'Project Manager'
  | 'Design'
  | 'Администрирование'
  | 'Юридический'
  | 'HR'
  | 'QA'
  | 'Маркетинг'
  | 'GameDev';

export type PositionDepartmentPair = [Position, Department];

export type VacationsResponse = VacationType[]
