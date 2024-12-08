import { fetchSessions, fetchUsers } from '@/services/admin'
import { NAVIGATE_ROUTE_LOGIN, NAVIGATE_ROUTE_SESSIONS, NAVIGATE_ROUTE_USERS } from '@/const'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Sessions from '@/pages/Sessions'
import Users from '@/pages/Users'
import NoPage from '@/pages/NoPage'
import WrapperFetch from './components/WrapperFetch'
import Login from './pages/Login'
import ISession from './types/ISession'
import IUser from './types/IUser'

function App() {
  return (
    <BrowserRouter basename='/admin'>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
          <Route 
            path={NAVIGATE_ROUTE_LOGIN} 
            element={<Login/>} 
          />
          <Route 
            path={NAVIGATE_ROUTE_SESSIONS} 
            element={<WrapperFetch<ISession> 
            Component={Sessions} 
            funcFetch={fetchSessions} 
            nextNavigateRoute={NAVIGATE_ROUTE_SESSIONS} 
            key={NAVIGATE_ROUTE_SESSIONS}/>} 
          />
          <Route 
            path={NAVIGATE_ROUTE_USERS} 
            element={<WrapperFetch<IUser> 
            Component={Users} 
            funcFetch={fetchUsers} 
            nextNavigateRoute={NAVIGATE_ROUTE_USERS} 
            key={NAVIGATE_ROUTE_USERS}/>} 
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
