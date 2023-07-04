import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom'
import Authorization from './components/authorization/Authorization'
import Primary from './components/primary/Primary'
import Search from './components/search/Search'
import Result from './components/result/Result'
import { histogramLoader} from './components/result/Result'
//import {textLoader } from './components/result/Result'
//import PrivateRoute from './utils/router/privateRoute'
import { useEffect } from 'react'
//import Navigation from '../../redux/hook/navigate'
import { Layout } from './layout/Layout'
import Header, { personDataLoader } from './components/header/Header'


const router = createBrowserRouter(createRoutesFromElements(
	<Route path={'/'} element={<Layout />}>
		<Route index element={<Primary />} />
		<Route path={'/search'} element={
		//<PrivateRoute>
			<Search />
		//</PrivateRoute>	
	} />
		<Route path={'/result'} element={<Result />} />
		<Route path={'/authorization'} element={<Authorization />} />
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