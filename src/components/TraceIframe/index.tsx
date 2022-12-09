import React from 'react';
const traceFilepath = '/Users/prudhvi/work/html-reporter/sample/trace.html'

// eslint-disable-next-line @typescript-eslint/no-var-requires
//const x = require(traceFilepath);
//console.log(x)
// class TraceIframe extends React.Component {
//    render(){
//       return (
//          <iframe src = {x} width = '100%' height = '100%' ></iframe>
//       );
//    }
// }

const TraceIframe: React.FC = () => {
  return (
    <iframe title="static_html" src = {traceFilepath} scrolling="yes" height='500px'></iframe>
  );
};
export default TraceIframe;

