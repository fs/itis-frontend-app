import { Routes, Route } from 'react-router-dom';

import EnvSpecificRouter from 'components/EnvSpecificRouter';

import { AuthUser } from 'globals/AuthUser';

import LoginPage from 'pages/Login';
import HomePage from 'pages/project/Index';
import RegistrationPage from 'pages/Registration';
import ProjectPage from 'pages/project/project/project';

function App() {
	return (
		<AuthUser>
			<EnvSpecificRouter>
				<Routes>
					<Route path={'/'} element={<HomePage />} />
					<Route path={'/:id'} element={<ProjectPage />} />
					<Route path={'/login'} element={<LoginPage />} />
					<Route path={'/registration'} element={<RegistrationPage />} />
				</Routes>
			</EnvSpecificRouter>
		</AuthUser>
	);
}

export default App;
