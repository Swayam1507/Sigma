import MainLayout from 'layout/MainLayout';
import AuthGuard from 'utils/route-guard/AuthGuard';
import Dashboard from 'pages/Dashboard';
import Country from 'pages/Country';
import Standard from 'pages/Standards';
import City from 'pages/City';
import Subscription from 'pages/Subscription/Subscription';
import User from 'pages/User/User';
import UserSub from 'pages/UserSubscription';
import SIPExtensions from 'pages/SIPExtensions/SIPExtensions';
import PhoneNumber from 'pages/PhoneNumber';
import Provider from 'pages/Provider/Provider';
import RateList from 'pages/RateList/RateList';
import StandardCards from 'pages/Student'
import Student from 'pages/Student/Student'

const MainRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/student/standards',
      element: <StandardCards />
    },
    {
      path: '/standards',
      element: <Standard />
    },
    {
      path: '/city',
      element: <City />
    },
    {
      path: '/phone-number',
      element: <PhoneNumber />
    },
    {
      path: '/subscription',
      element: <Subscription />
    },
    {
      path: '/system-config',
      element: <SIPExtensions />
    },
    {
      path: '/provider',
      element: <Provider />
    },
    {
      path: '/rate-list/:type/:parentId/:providerName',
      element: <RateList />
    },
    {
      path: '/student/standard/:standard',
      element: <Student />
    },
    {
      path: '/user',
      element: <User />
    },
    {
      path: '/user-subscription',
      element: <UserSub />
    }
  ]
};

export default MainRoutes;
