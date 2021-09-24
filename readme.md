![Marketplace by totor.ch](https://github.com/victorduvanel/marketplace/actions/workflows/node.js.yml/badge.svg)

# Marketplace by totor.ch

Fork a complete MERN Marketplace.

## Installation

Use the package manager [npmjs](https://www.npmjs.com) to install Marketplace.

```bash
//backend
cd backend && npm i && npm start 

//frontend
cd frontend && npm i && npm start
```

## Backend environment variable
```.env
//example
DATABASE=yourDatabaseURl
PORT=8000
JWT_SECRET=PASTYOURJWTSECRET
STRIPE_SECRET=sk_test_yourstripesecret
STRIPE_REDIRECT_URL=http://locahost:3000/stripe/callback
STRIPE_SETTING_REDIRECT_URL=http://locahost:3000/dashboard/seller
```
## Frontend environment variable

```.env
//example
REACT_APP_API='http://localhost:8000/api'
REACT_APP_STRIPE_KEY=pk_test_yourstripetestapikey
```

## Contributing to marketplace by totor.ch
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)