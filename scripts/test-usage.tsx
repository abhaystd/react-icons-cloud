
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SampleIcon } from '../packages/aws/src/icons/SampleIcon';
import { AwsLambda } from '../packages/aws/src/icons/AwsLambda';

console.log('Attempting to render React Icons...');

try {
    const htmlSample = renderToStaticMarkup(React.createElement(SampleIcon, { size: 48, color: 'red' }));
    console.log('SampleIcon HTML:');
    console.log(htmlSample);

    const htmlLambda = renderToStaticMarkup(React.createElement(AwsLambda, { size: 32, color: 'blue' }));
    console.log('AwsLambda HTML:');
    console.log(htmlLambda);
} catch (error) {
    console.error('Error rendering icon:', error);
}
