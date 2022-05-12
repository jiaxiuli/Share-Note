/*
 * @Author: 李佳修
 * @Date: 2022-05-11 13:53:13
 * @LastEditTime: 2022-05-12 17:23:06
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/App.tsx
 */
import PageLayout from "./views/PageLayout";
import { Provider } from "react-redux";
import store from './redux/store';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const App = () => (
    <Provider store={store}>
        <PageLayout />
    </Provider>
);

export default App;
