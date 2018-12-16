import fooRouter from './foo';


const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(apiPrefix, fooRouter);
  return app;
};

export default routes;
