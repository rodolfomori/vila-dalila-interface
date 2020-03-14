import {
  faHome,
  faUsers,
  faMapMarkedAlt,
  faUsersCog,
  faBuilding,
  faObjectGroup,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';

export default [
  {
    name: 'Home',
    icon: faHome,
    path: '/',
    private: false,
  },
  {
    name: 'Assistência',
    icon: faUsers,
    path: 'assistance',
    private: false,
  },
  {
    name: 'Territórios',
    icon: faMapMarkedAlt,
    path: 'territories',
    private: false,
  },
  {
    name: 'Grupos',
    icon: faObjectGroup,
    path: 'groups',
    private: false,
  },
  {
    name: 'Configurações',
    icon: faCogs,
    path: 'settings',
    private: true,
  },
  {
    name: 'Meu Perfil',
    icon: faUsersCog,
    path: 'profile',
    private: false,
  },
];
