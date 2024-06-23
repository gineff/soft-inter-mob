import type { RouteType } from './types';

export const routes: Record<string, RouteType> = {
  main: {
    title: 'О нас',
    path: '/',
  },
  portfolio: {
    title: 'Портфолио',
    path: '/portfolio',
  },
  unit: {
    title: 'Отделы',
    path: '/units',
  },
  vacations: {
    title: 'Вакансии',
    path: '/vacations',
  },
  technologies: {
    title: 'Технологии',
    path: '/technologies',
  },
  blog: {
    title: 'Блог',
    path: '/blog',
  },
  faq: {
    title: 'FAQ',
    path: '/faq',
  },
  partners: {
    title: 'Партнеры',
    path: '/partners',
  },
  contacts: {
    title: 'Контакты',
    path: '/contacts',
  },
};
