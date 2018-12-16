import express from 'express';
import FooController from './FooController';


const Router = express.Router();

Router.get('/foo', FooController.getAllFoo);

export default Router;
