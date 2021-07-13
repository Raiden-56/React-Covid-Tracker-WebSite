import React from 'react';
import Logo from '../../img/virus.png'
import './style.css';

export function NavBar() {

    const className = "component-NavBar";

    const [ display, setDisplay ] = React.useState(false);
    const [ index, setIndex ] = React.useState(49);

    window.addEventListener("resize", () => {
        if ((window.innerWidth || document.documentElement.clientWidth) > 685 && display) {
            lateralBar()
        }
    })

    async function lateralBar() {
        const e = document.getElementById("lateralBar");
        if (!display) {
            setIndex(51)
            e.style.transform = "translate(0px, 0px)";
            document.body.style.overflowY = "hidden"
            setDisplay(true)
            return document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop = 0 : "";
        } else if (display) {
            document.documentElement.scrollTop = 0;
            e.style.transform = "translate(-260px, 0px)";
            document.body.style.overflowY = "scroll"
            setDisplay(false)
            setTimeout(() => {
                setIndex(49)
            }, 250);
        }
    }

    function handleClick() {
        if (display) lateralBar()
    }

    return (
        <div className={`${className}`} style={{ zIndex: index }}>
            <div className={`${className}-container`}>
                <div className={`${className}-title`}>
                    <svg onClick={lateralBar} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512" className={`${className}-title-sandwich`}><path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path></svg>
                    <img alt={`${className}-title-logo`} className={`${className}-title-logo`} src={Logo}/>
                    <div className={`${className}-title-text`}>Covid Tracker</div>
                </div>
                <div className={`${className}-items`}>
                    <a className={`${className}-item`} href="#home">Home</a>
                    <a className={`${className}-item`} href="#stats">Stats</a>
                    <a className={`${className}-item`} href="#map">Map</a>
                    <a className={`${className}-item`} href="#vaccin">Vaccin</a>
                    <a className={`${className}-item`} href="#aide">Aide</a>
                    <a className={`${className}-item`} href="/redirect/Github.com">Github <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" className={`${className}-item-svg`}><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a>
                </div>
            </div>
            <div className="tes2" style={{ visibility: display ? "visible" : "hidden", transition: "0.0625s"}} onClick={handleClick}>
                <div className={`${className}-lateralBar`} id="lateralBar" style={{height: `${window.innerHeight - 70}px`, zIndex: 56}}> 
                    <div className={`${className}-lateralBar-items`}>
                        <a className={`${className}-lateralBar-item`} onClick={handleClick} href="#home">Home</a>
                        <a className={`${className}-lateralBar-item`} onClick={handleClick} href="#stats">Stats</a>
                        <a className={`${className}-lateralBar-item`} onClick={handleClick} href="#map">Map</a>
                        <a className={`${className}-lateralBar-item`} onClick={handleClick} href="#vaccin">Vaccin</a>
                        <a className={`${className}-lateralBar-item`} onClick={handleClick} href="#aide">Aide</a>
                        <a className={`${className}-lateralBar-item`} onClick={handleClick} href="/redirect/Github.com">Github <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" className={`${className}-lateralBar-item-svg`}><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a>
                    </div>
                </div>
            </div>
        </div>
    )
}