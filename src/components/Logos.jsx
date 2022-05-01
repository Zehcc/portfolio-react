import {
  SiHtml5 as HTML,
  SiCss3 as CSS,
  SiJavascript as JS,
  SiTypescript as TS,
  SiReact as React,
  SiAngular as Angular,
} from "react-icons/si";

const Logos = ({ languajes }) => {
  return (
    <div className='logos'>
      {languajes.includes("HTML") && (
        <div className='logo'>
          <HTML color='red' size={30} />
        </div>
      )}
      {languajes.includes("CSS") && (
        <div className='logo'>
          <CSS color='blue' size={30} />
        </div>
      )}
      {languajes.includes("JS") && (
        <div className='logo'>
          <JS color='yellow' size={30} />
        </div>
      )}
      {languajes.includes("TS") && (
        <div className='logo'>
          <TS color='dodgerblue' size={30} />
        </div>
      )}
      {languajes.includes("React") && (
        <div className='logo'>
          <React color='deepskyblue' size={30} />
        </div>
      )}
      {languajes.includes("Angular") && (
        <div className='logo'>
          <Angular color='green' size={30} />
        </div>
      )}
    </div>
  );
};

export default Logos;
