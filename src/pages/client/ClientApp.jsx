import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import { lazy } from 'react';
import React from 'react';
import { Layout } from 'pages/client/Layout';
const Home = lazy(() =>
  import('./Home').then(module => ({
    default: module.Home,
  }))
);
const Entrants = lazy(() =>
  import('./Entrants').then(module => ({
    default: module.Entrants,
  }))
);
const Literature = lazy(() =>
  import('./Literature').then(module => ({
    default: module.Literature,
  }))
);
const News = lazy(() =>
  import('./News').then(module => ({
    default: module.News,
  }))
);
const NewsDetail = lazy(() =>
  import('./NewsDetail').then(module => ({
    default: module.NewsDetail,
  }))
);
const Support = lazy(() =>
  import('./Support').then(module => ({
    default: module.Support,
  }))
);
const Disciplines = lazy(() =>
  import('./Disciplines').then(module => ({
    default: module.Disciplines,
  }))
);
const History = lazy(() =>
  import('./History').then(module => ({
    default: module.History,
  }))
);
const Teachers = lazy(() =>
  import('./Teachers').then(module => ({
    default: module.Teachers,
  }))
);
const TeacherDetail = lazy(() =>
  import('./TeacherDetail').then(module => ({
    default: module.TeacherDetail,
  }))
);
const Partnership = lazy(() =>
  import('./Partnership').then(module => ({
    default: module.Partnership,
  }))
);
const PartnershipDetail = lazy(() =>
  import('./PartnershipDetail').then(module => ({
    default: module.PartnershipDetail,
  }))
);

const Schedule = lazy(() =>
  import('./Schedule').then(module => ({
    default: module.Schedule,
  }))
);
const Conferences = lazy(() =>
  import('./Conferences').then(module => ({
    default: module.Conferences,
  }))
);
const ConferencesDetail = lazy(() =>
  import('./ConferencesDetail').then(module => ({
    default: module.ConferencesDetail,
  }))
);
const ResearchAndAcquisitions = lazy(() =>
  import('./ResearchAndAcquisitions').then(module => ({
    default: module.ResearchAndAcquisitions,
  }))
);
const TestPage = lazy(() =>
  import('./TestPage').then(module => ({
    default: module.TestPage,
  }))
);
const NotFoundPage = lazy(() =>
  import('./NotFoundPage').then(module => ({
    default: module.NotFoundPage,
  }))
);



export const ClientApp = () => {

  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="test_page" element={<TestPage />} />
          <Route path="entrants" element={<Entrants />}/>
          <Route path="literature" element={<Literature />} />
          <Route path="learning_process">
            <Route index element={<Navigate replace to="support" />} />
            <Route path="support" element={<Support />} />
            <Route path="disciplines" element={<Disciplines />} />
            <Route path="schedule" element={<Schedule />} />
          </Route>
          <Route path="about">
            <Route index element={<Navigate replace to="history" />} />
            <Route path="history" element={<History />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="teachers/:id" element={<TeacherDetail />} />
            <Route path="partnership" element={<Partnership />} />
            <Route path="partnership/:id" element={<PartnershipDetail />} />
            <Route path="news" element={<News />} />
            <Route path="news/:id" element={<NewsDetail />} />
          </Route>
          <Route path="research_activities">
            <Route
              index
              element={<Navigate replace to="research_and_acquisitions" />}
            />
            <Route
              path="research_and_acquisitions"
              element={<ResearchAndAcquisitions />}
            />
            <Route path="conferences" element={<Conferences />} />
            <Route path="conferences/:id" element={<ConferencesDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
};
