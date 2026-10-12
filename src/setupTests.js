// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// react-router v7 expects these globals, which CRA's jsdom environment lacks.
Object.assign(global, { TextEncoder, TextDecoder });

// Load translations, as src/index.jsx does in the real app.
require('i18n');
