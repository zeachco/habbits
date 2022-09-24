import express from 'express';

export const app = express();

import { auth } from 'express-openid-connect';

const config = {
	authRequired: false,
	auth0Logout: true,
	secret: 'a long, randomly-generated string stored in env',
	baseURL: 'http://localhost:3000',
	clientID: '0vehUcv0a64GXEteHHx9RUTjcLSlJUb2',
	issuerBaseURL: 'https://nodium.auth0.com',
};

export const authMiddleware = auth(config);

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(authMiddleware);

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
	res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

try {
	app.listen(3000, () => console.log(`Server open at http://localhost:3000`));
} catch (err) {
	console.warn(err);
}
