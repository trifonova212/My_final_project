import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Authorization from './components/authorization/Authorization'
import Primary from './components/primary/Primary'
import Search from './components/search/Search'
import Result from './components/result/Result'
import { Layout } from './layout/Layout'
import NotFound from './components/notFound/NotFound'
import AuthPrimary from './components/authPrimary/AuthPrimary'
import RequireAuth from './utils/RequireAuth'


const router = createBrowserRouter(createRoutesFromElements(
	<Route path={'/'} element={<Layout />}>
		<Route index element={<Primary />} />
		<Route path={'/authPrimary'} element={
			<RequireAuth>
				<AuthPrimary />
			</RequireAuth>		
		} />
		<Route path={'/search'} element={
			<RequireAuth>
				<Search />
			</RequireAuth>
		} />
		<Route path={'/result'} element={
			<RequireAuth>
				<Result />
			</RequireAuth>
		} />
		<Route path={'/authorization'} element={<Authorization />} />
		<Route path={'/*'} element={<NotFound />} />
	</Route>
))

function App() {

  	return (
		<div className='wrapper'>	
			<RouterProvider router={router}/>
		</div>
  	)
}

export default App;