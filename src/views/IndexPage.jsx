import React from 'react';
import { requiresAuthentication } from 'utils/authentication';

const IndexPage = () => <h1>Hello world</h1>;

export default requiresAuthentication(IndexPage);
