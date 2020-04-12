import { memo } from 'react';
import PageConstructor from '../../components/PageConstructor/PageConstructor';
import * as components from './scheme';
import model from './data/model.json';

const TestPage = () => (
  <PageConstructor model={model} components={components} />
);

export default memo(TestPage);