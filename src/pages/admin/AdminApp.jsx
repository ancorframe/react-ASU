import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import React from 'react';
import { EntrantsLayout } from 'pages/admin/Entrants/EntrantsLayout';
import { NewsLayout } from 'pages/admin/News/NewsLayout';
import { TeachersLayout } from 'pages/admin/Teacher/TeachersLayout';
import { PartnershipLayout } from 'pages/admin/Partnership/PartnershipLayout';
import { Layout } from './Layout';
import { PrivateRoute } from 'helpers/PrivateRoute';
import { RestrictedRoute } from 'helpers/PublicRoute';

const Login = lazy(() =>
  import('./Login').then(module => ({
    default: module.Login,
  }))
);
const Register = lazy(() =>
  import('./Register').then(module => ({
    default: module.Register,
  }))
);
const Home = lazy(() =>
  import('./Home').then(module => ({
    default: module.Home,
  }))
);
const Entrants = lazy(() =>
  import('./Entrants/Entrants').then(module => ({
    default: module.Entrants,
  }))
);
const News = lazy(() =>
  import('./News/News').then(module => ({
    default: module.News,
  }))
);
const CreateNews = lazy(() =>
  import('./News/CreateNews').then(module => ({
    default: module.CreateNews,
  }))
);
const Support = lazy(() =>
  import('./Support').then(module => ({
    default: module.Support,
  }))
);
const Teacher = lazy(() =>
  import('./Teacher/Teacher').then(module => ({
    default: module.Teacher,
  }))
);
const CreateTeacher = lazy(() =>
  import('./Teacher/CreateTeacher').then(module => ({
    default: module.CreateTeacher,
  }))
);
const History = lazy(() =>
  import('./History').then(module => ({
    default: module.History,
  }))
);

const Partnership = lazy(() =>
  import('./Partnership/Partnership').then(module => ({
    default: module.Partnership,
  }))
);
const CreatePartnership = lazy(() =>
  import('./Partnership/CreatePartnership').then(module => ({
    default: module.CreatePartnership,
  }))
);

const PartnershipDetailLayout = lazy(() =>
  import('./Partnership/PartnershipDetailLayout').then(module => ({
    default: module.PartnershipDetailLayout,
  }))
);

const PartnershipDetail = lazy(() =>
  import('./Partnership/PartnershipDetail').then(module => ({
    default: module.PartnershipDetail,
  }))
);

const CreatePartnershipDetail = lazy(() =>
  import('./Partnership/CreatePartnershipDetail').then(module => ({
    default: module.CreatePartnershipDetail,
  }))
);
// const UserContext = createContext(null);
const CreateConference = lazy(() =>
  import('./Conference/CreateConference').then(module => ({
    default: module.CreateConference,
  }))
);
const Conference = lazy(() =>
  import('./Conference/Conference').then(module => ({
    default: module.Conference,
  }))
);
const ConferenceLayout = lazy(() =>
  import('./Conference/ConferenceLayout').then(module => ({
    default: module.ConferenceLayout,
  }))
);

const CreateDisciplines = lazy(() =>
  import('./Disciplines/CreateDisciplines').then(module => ({
    default: module.CreateDisciplines,
  }))
);
const Disciplines = lazy(() =>
  import('./Disciplines/Disciplines').then(module => ({
    default: module.Disciplines,
  }))
);
const DisciplinesLayout = lazy(() =>
  import('./Disciplines/DisciplinesLayout').then(module => ({
    default: module.DisciplinesLayout,
  }))
);
const CreateLiterature = lazy(() =>
  import('./Literature/CreateLiterature').then(module => ({
    default: module.CreateLiterature,
  }))
);
const Literature = lazy(() =>
  import('./Literature/Literature').then(module => ({
    default: module.Literature,
  }))
);
const LiteratureLayout = lazy(() =>
  import('./Literature/LiteratureLayout').then(module => ({
    default: module.LiteratureLayout,
  }))
);
const Research = lazy(() =>
  import('./Research/Research').then(module => ({
    default: module.Research,
  }))
);

const CreateSchedule = lazy(() =>
  import('./Schedule/CreateSchedule').then(module => ({
    default: module.CreateSchedule,
  }))
);
const Schedule = lazy(() =>
  import('./Schedule/Schedule').then(module => ({
    default: module.Schedule,
  }))
);
const ScheduleLayout = lazy(() =>
  import('./Schedule/ScheduleLayout').then(module => ({
    default: module.ScheduleLayout,
  }))
);

export const AdminApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate replace to="login" />} />
        <Route element={<RestrictedRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="support" element={<Support />} />
          <Route path="research" element={<Research />} />
          <Route path="history" element={<History />} />
          <Route path="entrants" element={<EntrantsLayout />}>
            <Route path=":id" element={<Entrants />} />
          </Route>
          <Route path="news" element={<NewsLayout />}>
            <Route path=":id" element={<News />} />
            <Route path="create" element={<CreateNews />} />
          </Route>
          <Route path="teachers" element={<TeachersLayout />}>
            <Route path=":id" element={<Teacher />} />
            <Route path="create" element={<CreateTeacher />} />
          </Route>
          <Route path="partnership" element={<PartnershipLayout />}>
            <Route path=":id" element={<PartnershipDetailLayout />}>
              <Route index element={<Navigate replace to="detail" />} />
              <Route path="detail" element={<Partnership />} />
              <Route path=":detailId" element={<PartnershipDetail />} />
              <Route path="create" element={<CreatePartnershipDetail />} />
            </Route>
            <Route path="create" element={<CreatePartnership />} />
          </Route>
          <Route path="conference" element={<ConferenceLayout />}>
            <Route path=":id" element={<Conference />} />
            <Route path="create" element={<CreateConference />} />
          </Route>
          <Route path="disciplines" element={<DisciplinesLayout />}>
            <Route path=":id" element={<Disciplines />} />
            <Route path="create" element={<CreateDisciplines />} />
          </Route>
          <Route path="literature" element={<LiteratureLayout />}>
            <Route path=":id" element={<Literature />} />
            <Route path="create" element={<CreateLiterature />} />
          </Route>
          <Route path="schedule" element={<ScheduleLayout />}>
            <Route path=":id" element={<Schedule />} />
            <Route path="create" element={<CreateSchedule />} />
          </Route>
        </Route>
      </Route>
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};
