import * as React from 'react';
import { NextPage } from 'next';
import style from './index.module.scss';

const Home: NextPage = () => {
  return <h1 className={style.bold}>Hello world!</h1>;
};

export default Home;
