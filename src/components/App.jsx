import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { lazy } from 'react';
import { Layout } from './Layout';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { ScrollToTop } from './ScrollToTop';

const Home = lazy(() =>
  import('../pages/Home').then(module => ({
    default: module.Home,
  }))
);
const Introduction = lazy(() =>
  import('../pages/Introduction').then(module => ({
    default: module.Introduction,
  }))
);
const Literature = lazy(() =>
  import('../pages/Literature').then(module => ({
    default: module.Literature,
  }))
);
const News = lazy(() =>
  import('../pages/News').then(module => ({
    default: module.News,
  }))
);
const NewsDetail = lazy(() =>
  import('../pages/NewsDetail').then(module => ({
    default: module.NewsDetail,
  }))
);
const Support = lazy(() =>
  import('../pages/Support').then(module => ({
    default: module.Support,
  }))
);
const Disciplines = lazy(() =>
  import('../pages/Disciplines').then(module => ({
    default: module.Disciplines,
  }))
);
const History = lazy(() =>
  import('../pages/History').then(module => ({
    default: module.History,
  }))
);
const Teachers = lazy(() =>
  import('../pages/Teachers').then(module => ({
    default: module.Teachers,
  }))
);
const TeacherDetail = lazy(() =>
  import('../pages/TeacherDetail').then(module => ({
    default: module.TeacherDetail,
  }))
);
const Partnership = lazy(() =>
  import('../pages/Partnership').then(module => ({
    default: module.Partnership,
  }))
);
const PartnershipDetail = lazy(() =>
  import('../pages/PartnershipDetail').then(module => ({
    default: module.PartnershipDetail,
  }))
);

const Schedule = lazy(() =>
  import('../pages/Schedule').then(module => ({
    default: module.Schedule,
  }))
);
const Conferences = lazy(() =>
  import('../pages/Conferences').then(module => ({
    default: module.Conferences,
  }))
);
const ConferencesDetail = lazy(() =>
  import('../pages/ConferencesDetail').then(module => ({
    default: module.ConferencesDetail,
  }))
);
const ResearchAndAcquisitions = lazy(() =>
  import('../pages/ResearchAndAcquisitions').then(module => ({
    default: module.ResearchAndAcquisitions,
  }))
);
const TestPage = lazy(() =>
  import('../pages/TestPage').then(module => ({
    default: module.TestPage,
  }))
);

const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage').then(module => ({
    default: module.NotFoundPage,
  }))
);

export const App = () => {
  const location = useLocation();

  // const element = useRoutes([
  //   {
  //     path: '/',
  //     children: [
  //       {
  //         element: <Home />,
  //         index: true,
  //       },
  //       { path: 'introduction', element: <Introduction /> },
  //       { path: 'literature', element: <Literature /> },
  //       {
  //         path: 'learning_process',
  //         children: [
  //           { path: '', element: <Navigate to="support" /> },
  //           {
  //             path: 'support',
  //             element: <Support />,
  //           },
  //           { path: 'disciplines', element: <Disciplines /> },
  //           { path: 'introduction', element: <Introduction /> },
  //           { path: 'schedule', element: <Schedule /> },
  //         ],
  //       },
  //       {
  //         path: 'about',
  //         children: [
  //           { path: '', element: <Navigate to="history" /> },
  //           { path: 'history', element: <History /> },
  //           { path: 'disciplines', element: <Disciplines /> },
  //           { path: 'teachers', element: <Teachers /> },
  //           { path: 'teachers/:id', element: <TeacherDetail /> },
  //           { path: 'partnership', element: <Partnership /> },
  //           {
  //             path: 'partnership/:id',
  //             element: <PartnershipDetail />,
  //           },
  //           { path: 'news', element: <News /> },
  //           { path: 'news/:id', element: <NewsDetail /> },
  //         ],
  //       },
  //       {
  //         path: 'research_activities',

  //         children: [
  //           { path: '', element: <Navigate to="research_and_acquisitions" /> },
  //           {
  //             path: 'research_and_acquisitions',
  //             element: <ResearchAndAcquisitions />,
  //             index: true,
  //           },
  //           { path: 'conferences', element: <Conferences /> },
  //           {
  //             path: 'conferences/:id',
  //             element: <ConferencesDetail />,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ]);

  return (
    <><ScrollToTop />
      <Layout />
      
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/">
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="testpage" element={<TestPage />} />
            <Route path="introduction" element={<Introduction />} />
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
              <Route
                path="teachers/:teacherDetail"
                element={<TeacherDetail />}
              />
              <Route path="partnership" element={<Partnership />} />
              <Route
                path="partnership/:partnershipDetail"
                element={<PartnershipDetail />}
              />
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
              <Route
                path="conferences/:conferencesDetail"
                element={<ConferencesDetail />}
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>

      {/* <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence> */}
    </>
  );
};
