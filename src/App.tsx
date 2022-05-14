/*
 * @Author: 李佳修
 * @Date: 2022-05-11 13:53:13
 * @LastEditTime: 2022-05-13 21:19:33
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/App.tsx
 */
import PageLayout from "./views/PageLayout";
import { Provider } from "react-redux";
import store from './redux/store';
import './App.css';
import Login from "./views/Login";
import Register from "./views/Register";
import EmailConfirm from './views/EmailConfirm';
import { Routes, Route } from "react-router-dom";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const App = () => (
    <Provider store={store}>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/email-confirm" element={<EmailConfirm />} />
            <Route path="*" element={<PageLayout />} />
        </Routes>
    </Provider>
);

export default App;
