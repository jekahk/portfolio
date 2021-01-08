import React from 'react';
import './app.css'
import Typical from 'react-typical'
import profilepic from './Assets/blackhoodie.png'
import ParticlesBg from 'particles-bg'
import {scroller as scroll } from 'react-scroll'
import sclogo from './Assets/headerlogo.png'
import apilogo from './Assets/SteamCheckAPI.png' 
import jk from './Assets/JKportfolio.png'
import github from './Assets/github.png'
import linkedin from './Assets/linked.png'

const sleep = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time))
}

const hobbies = ['🚲 Cycling', '🏂 Snowboarding','🎮 Playing videogames','🦾 Going to the gym','💻 Building and modifying PCs']
const listItems = hobbies.map((hobby,i) => <div className="list "key={i}>{hobby}</div>);

const Top = () => {
	return (
		<React.Fragment>
				<div className="intro">
				<Typical
					className="typical"
					steps={['Hello!', 1500, 'My name is Julius Kähkönen']}
					loop={1}
					wrapper="p"
				></Typical>
			</div>
			<div className="slider"></div>
		</React.Fragment>
	)
};

const Home = () => {
	return(
		<React.Fragment>
			<div  name="bottom" className="home">
				<div className="pictureHome">
					<img className="profilepic" src={profilepic} alt="profilepic" />
				</div>
				<div className='line'></div>
				<div className="navButtons">
					<div className="navBarParts">
						<button onClick={ScrollToProjects}>
							<div className="navText">Projects</div>
						</button>
					</div>
					<div className="navBarParts" style={{marginLeft: '10vh'}}>
						<button onClick={ScrollToMe}>
							<div className="navText">Me</div>
						</button>
					</div>
						<div className="navBarParts" style={{marginLeft: '10vh'}}>
							<button onClick={ScrollToSkills}>
								<div className="navText">Skills</div>
							</button>
						</div>
				</div>
			</div>
		</React.Fragment>
	)
}


const Foot = () => {
	return(
		<React.Fragment>
			<div className="footer">
				<span className="links">
					<a style={{ display: 'table-cell' }} href="https://github.com/jekahk" target="_blank" rel="noopener noreferrer">
						<img className="github" src={github} alt="github" />
					</a>
					<a style={{ display: 'table-cell' }} href="https://www.linkedin.com/in/julius-k%C3%A4hk%C3%B6nen-92b840202/" target="_blank" rel="noopener noreferrer">
						<img className="linkedin" src={linkedin} alt="linkedin" />
					</a>
				</span>
				<span className="created">
					<div className="createdText">Designed and Created by Julius Kähkönen</div>
				</span>
			</div>
		</React.Fragment>
	)
};

const ScrollToProjects = () => {
	scroll.scrollTo('projects', { smooth: true, duration: 1500 });
}
const ScrollToMe = () => {
	scroll.scrollTo('me', { smooth: true, duration: 1500 });
}
const ScrollToSkills = () => {
	scroll.scrollTo('skills', { smooth: true, duration: 1500 });
}

const Bot = () => {
	return (
		<React.Fragment>
			<div className="things" style={{height: '400vh', width: '100vw'}}>
			<ParticlesBg color="#000000" num={120} type="cobweb" bg={true} />
			<Home />
			<div className="info">
				<div name="me" className="infoBox">
					<div className="headers">Who am I?</div>
					<div className="text">
						I'm 22 years old student from Turku Finland. 
						I moved here from Masku because of my studies and have lived in Turku two and a half years now.
						I study Computer Sience at the University of Turku. 
						My studies started in 2018, so now I'm close to the end of my bachelor degree. 
						After that I will start studies for my master's degree. 
						I have always had a great interest in computers and other tech. 
					</div>
				</div>
				<div className="infoBox">
					<div className="headers">My Hobbies</div>
					<div>{listItems}</div>
				</div>
				<div name="projects" className="infoBox">
					<div className="headers">My Projects</div>
					<div className="projectTiles">
						<a className="sc" href="https://steam-checker-93cde.web.app/" target="_blank" rel="noopener noreferrer">
							<img className="scLogo" src={sclogo} alt="sclogo" />
						</a>
						<div className='text2'>
							<div className="text">
								Steam Checker was my first own project.
								The goal was to code a page with React.js where you can search Steam profile 
								statistics like profile picture, name, profile level and so forth by Steam ID or profile link. 
								The site gets the profile information from an API that I have also made (look below Steam Checker API).
							</div>
							<a className="gitLink" href="https://github.com/jekahk/SteamChecker" target="_blank" rel="noopener noreferrer">
								Source code and more info here
							</a>
						</div>
					</div>
					<div className='lineProject'></div>
					<div className="projectTiles">
					<div className='text2'>
						<div className="text">
							Python Flask API that I made for the Steam Checker.
							It scrapes the webpage of the profile requested and sends back an object containing the profile picture, name, level, xp (also how much xp needed for level up) and number of badges.
							I host this API on a VPS and it has a domain name:
						</div>
						<div style={{marginTop: '0.5vh'}}>
							https://www.steam-checker-api.xyz
						</div>
						<a className="gitLink" href="https://github.com/jekahk/SteamCheck_API" target="_blank" rel="noopener noreferrer">
								Source code and more info here
						</a>
					</div>
						<img className="apiLogo" src={apilogo} alt="apilogo" />
					</div>
					<div className='lineProject'></div>
					<div className="projectTiles">
						<div><img className="jk" src={jk} alt="JK" /></div>
						<div style={{marginLeft: '3vw'}}>This portfolio</div>
					</div>
				</div>
				<div name="skills" className="infoBox">
				<div className="headers">IT-Skills</div>
				</div>
				<div className="infoBox">
					<div className="headers">...</div>
				</div>
				<div className="infoBox">
				<div className="headers">Contact me @</div>
				</div>
			</div>
			</div>
			<Foot/>
		</React.Fragment>
	)
};

const App = () => {

	const [renderTop, setRenderTop] = React.useState(true);
	const [renderBot, setRenderBot] = React.useState(false);

	React.useEffect(() => {
		sleep(5000).then(()=>{
			setRenderBot(true);
			scroll.scrollTo('bottom', { smooth: true, duration: 2800 });
			setRenderTop(true)
		})
	}, []);

	return (
		<div className="main">
			{renderTop === true ?
				<Top/> : undefined}
			{renderBot === true ?
				<Bot/> : undefined}
		</div>
	);
};

export default App;
