import type { RouteType } from './types';

export const routes: Record<string, RouteType> = {
  main: {
    title: 'О нас',
    path: 'About',
  },
  departments: {
    title: 'Отделы',
    path: 'Departments',
  },
  vacations: {
    title: 'Вакансии',
    path: 'vacations',
  },
  technologies: {
    title: 'Технологии',
    path: 'Technologies',
  },
  blog: {
    title: 'Блог',
    path: 'Blog',
  },
  partners: {
    title: 'Партнеры',
    path: 'Partners',
  },
  faq: {
    title: 'FAQ',
    path: 'Faq',
  },
  contacts: {
    title: 'Контакты',
    path: 'Contacts',
  },
};
