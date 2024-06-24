import type { RouteType } from './types';

export const routes: Record<string, RouteType> = {
  main: {
    title: 'О нас',
    path: 'About',
  },
  portfolio: {
    title: 'Портфолио',
    path: 'Portfolio',
  },
  unit: {
    title: 'Отделы',
    path: 'Units',
  },
  vacations: {
    title: 'Вакансии',
    path: 'Vacations',
  },
  technologies: {
    title: 'Технологии',
    path: 'Technologies',
  },
  blog: {
    title: 'Блог',
    path: 'Blog',
  },
  faq: {
    title: 'FAQ',
    path: 'Faq',
  },
  partners: {
    title: 'Партнеры',
    path: 'Partners',
  },
  contacts: {
    title: 'Контакты',
    path: 'Contacts',
  },
};
