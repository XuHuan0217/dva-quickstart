import dva from 'dva';
import './index.css';
import products from './models/products.js';
import router from './router';
// 1. Initialize
const app = dva({
  initialState: {
    products: [
            { name: 'dva', id: 1 },
            { name: 'dva', id: 2 },
    ],

  },
  onError(error) {
    console.log(error);
  },
});

// 2. Plugins
// app.use({});

// 3. Model  .default
app.model(products);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
