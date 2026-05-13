
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ResUser48Light } from '../packages/aws/src/icons/ResUser48Light';
import { ResUser48Dark } from '../packages/aws/src/icons/ResUser48Dark';

console.log('Attempting to render React Icons...');

try {
    const htmlSample = renderToStaticMarkup(React.createElement(ResUser48Light, { size: 48, color: 'red' }));
    console.log('ResUser48Light HTML:');
    console.log(htmlSample);

    const htmlLambda = renderToStaticMarkup(React.createElement(ResUser48Dark, { size: 32, color: 'blue' }));
    console.log('ResUser48Dark HTML:');
    console.log(htmlLambda);
} catch (error) {
    console.error('Error rendering icon:', error);
}
