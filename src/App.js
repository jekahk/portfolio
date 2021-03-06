import React from 'react';
import './App.css';
import Typical from 'react-typical';
import profilepic from './Assets/blackhoodie.png';
import ParticlesBg from 'particles-bg';
import { scroller as scroll } from 'react-scroll';
import sclogo from './Assets/headerlogo.png';
import apilogo from './Assets/SteamCheckAPI.png';
import jk from './Assets/JKportfolio.png';
import github from './Assets/github.png';
import linkedin from './Assets/linked.png';
import linkedinB from './Assets/linkedBlack.png';
import emailIco from './Assets/email.png';
import globe from './Assets/globe.png';

//funciton, that when called starts a timer
const sleep = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time));
};

//list for hobbies rendered in Bot
const hobbies = [
	'🚲 Cycling',
	'🏂 Snowboarding',
	'🎮 Playing videogames',
	'🦾 Going to the gym',
	'💻 Building and modifying PCs'
];
const listItems = hobbies.map((hobby, i) => (
	<div className="list " key={i}>
		{hobby}
	</div>
));

//component that returns the first "hello" page
const Top = () => {
	return (
		<React.Fragment>
			<div className="intro">
				<Typical className="typical" steps={[ 'Hello!', 1500, 'My name is Julius Kähkönen' ]} loop={1} wrapper="p" />
			</div>
			<div className="slider" />
		</React.Fragment>
	);
};

//component that returns the page where will be scrolled automatically after the "hello" page
const Home = () => {
	return (
		<React.Fragment>
			<div name="bottom" className="home">
				<div className="pictureHome">
					<img className="profilepic" src={profilepic} alt="profilepic" />
				</div>
				<div className="line" />
				<div className="navButtons">
					<div className="navBarParts">
						<button onClick={ScrollToProjects}>
							<div className="navText">Projects</div>
						</button>
					</div>
					<div className="navBarParts2">
						<button onClick={ScrollToMe}>
							<div className="navText">Me</div>
						</button>
					</div>
					<div className="navBarParts2">
						<button onClick={ScrollToSkills}>
							<div className="navText">Skills</div>
						</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

//component that returns rows for Skill table
const TableRow = (props) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			<div style={{ marginRight: '2vw', width: '150px', fontSize: '1.1rem' }}>{props.skill}</div>
			<div style={{ fontSize: '1.1rem' }}>{props.level}</div>
		</div>
	);
};

//Array for IT-Skills Code
const skillListCode = [
	{
		skill: 'React.js',
		level: 'Good'
	},
	{
		skill: 'Python',
		level: 'Good'
	},
	{
		skill: 'Java',
		level: 'Average'
	},
	{
		skill: 'C',
		level: 'Basics'
	}
];

//Array for IT-skills Other
const skillListOther = [
	{
		skill: 'Windows',
		level: 'Excellent'
	},
	{
		skill: 'Linux/Unix',
		level: 'Good'
	},
	{
		skill: 'Microsoft Office',
		level: 'Excellent'
	},
	{
		skill: 'Adobe Photoshop',
		level: 'Good'
	},
	{
		skill: 'Adobe Illustrator',
		level: 'Tolerable'
	},
	{
		skill: 'Sony Vegas',
		level: 'Basics'
	}
];

//component that retuns the table for Code skills
const TablesCode = () => {
	return (
		<div style={{ marginBottom: '4vh' }}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<div style={{ marginRight: '2vw', width: '150px', fontWeight: 'bold', fontSize: '1.2rem' }}>Skill</div>
				<div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Level</div>
			</div>
			<div className="lineSkills" />
			{skillListCode.map(({ skill, level }) => <TableRow skill={skill} level={level} />)}
		</div>
	);
};

//component that retuns the table for Other skills'
const TablesOther = () => {
	return (
		<div style={{ marginBottom: '4vh' }}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<div style={{ marginRight: '2vw', width: '150px', fontWeight: 'bold', fontSize: '1.2rem' }}>Skill</div>
				<div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Level</div>
			</div>
			<div className="lineSkills" />
			{skillListOther.map(({ skill, level }) => <TableRow skill={skill} level={level} />)}
		</div>
	);
};

//component that returns Footer
const Foot = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<span className="links">
					<a
						style={{ display: 'table-cell' }}
						href="https://github.com/jekahk"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img className="github" src={github} alt="github" />
					</a>
					<a
						style={{ display: 'table-cell' }}
						href="https://www.linkedin.com/in/julius-k%C3%A4hk%C3%B6nen-92b840202/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img className="linkedin" src={linkedin} alt="linkedin" />
					</a>
				</span>
				<span className="created">
					<div className="createdText">Designed and Created by Julius Kähkönen</div>
				</span>
			</div>
		</React.Fragment>
	);
};

//functions thet scrolls to right place on the page
const ScrollToProjects = () => {
	scroll.scrollTo('projects', { smooth: true, duration: 1500 });
};
const ScrollToMe = () => {
	scroll.scrollTo('me', { smooth: true, duration: 1500 });
};
const ScrollToSkills = () => {
	scroll.scrollTo('skills', { smooth: true, duration: 1500 });
};

//component that returns all things after the "hello" page
const Bot = () => {
	return (
		<React.Fragment>
			<div className="things">
				<ParticlesBg color="#000000" num={120} type="cobweb" bg={true} />
				<Home />
				<div className="info">
					<div name="me" className="infoBox">
						<div className="headers">Who am I?</div>
						<div className="text">
							I'm a 22 years old student from Turku Finland. I moved here from Masku because of my studies and have
							lived in Turku for two and a half years now. I study Computer Science at the University of Turku. My
							studies started in 2018 and I plan to graduate in 2023 as Master of Science. I have always had a great
							interest in computers and other tech.
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
							<div className="text2">
								<div className="text">
									Steam Checker was my first own project. The goal was to code a page with React.js where you can search
									Steam profile statistics like profile picture, name, profile level and so forth by Steam ID or profile
									link. The site gets the profile information from an API that I have also made (look below Steam
									Checker API).
								</div>
								<a
									className="gitLink"
									href="https://github.com/jekahk/SteamChecker"
									target="_blank"
									rel="noopener noreferrer"
								>
									Source code and more info here
								</a>
							</div>
						</div>
						<div className="lineProject" />
						<div className="projectTiles2">
							<img className="apiLogo" src={apilogo} alt="apilogo" />
							<div className="text2">
								<div className="text">
									Python Flask API that I made for the Steam Checker. It scrapes the webpage of the profile requested
									and sends back an object containing the profile picture, name, level, xp (also how much xp needed for
									level up) and number of badges. I host this API on a VPS and it has a domain name:
								</div>
								<div style={{ marginTop: '0.5vh' }}>https://www.steam-checker-api.xyz</div>
								<a
									className="gitLink"
									href="https://github.com/jekahk/SteamCheck_API"
									target="_blank"
									rel="noopener noreferrer"
								>
									Source code and more info here
								</a>
							</div>
						</div>
						<div className="lineProject" />
						<div className="projectTiles">
							<div>
								<img className="jk" src={jk} alt="JK" />
							</div>
							<div className="text2">
								<div className="text">
									This portfolio page that you are looking right now. The intent was to bring information about me and
									my projects to one place. The page is coded with React.js.
								</div>
								<a
									className="gitLink"
									href="https://github.com/jekahk/portfolio"
									target="_blank"
									rel="noopener noreferrer"
								>
									Source code and more info here
								</a>
							</div>
						</div>
					</div>
					<div name="projects" className="infoBox">
						<div className="headers">In progress</div>
						<div className="projectTiles2">
							<div>
								<img className="countryLogo" src={globe} alt="countryLogo" />
							</div>
							<div className="text2">
								<div className="countyHeader">Country Info</div>
								<div className="text">
									React app that shows information about countries, for example capital and timezone. It is also
									possible to filter the countries that you want the information out off.
								</div>
								<a
									className="gitLink"
									href="https://github.com/jekahk/Country-Info"
									target="_blank"
									rel="noopener noreferrer"
								>
									Source code and project progress here
								</a>
							</div>
						</div>
					</div>
					<div name="skills" className="infoBox">
						<div className="headers">IT-Skills</div>
						<div className="skillBox">
							<div className="tableBox">
								<div className="headers2" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
									Code
								</div>
								<TablesCode />
							</div>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<div className="headers2" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
									Other
								</div>
								<TablesOther />
							</div>
						</div>
					</div>
					<div className="infoBox">
						<div className="headers">Language Skills</div>
						<div className="headerTable">
							<div className="language">Finnish</div>
							<div>Native</div>
						</div>
						<div className="lineSkills2" />
						<div className="headerTable">
							<div className="language">English</div>
							<div>Fluent</div>
						</div>
						<div className="lineSkills2" />
						<div className="headerTable">
							<div className="language">Swedish</div>
							<div>Basics</div>
						</div>
						<div className="lineSkills2" />
					</div>
					<div className="infoBox">
						<div className="headers">Contact me @</div>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<a
								style={{ display: 'table-cell' }}
								href="https://www.linkedin.com/in/julius-k%C3%A4hk%C3%B6nen-92b840202/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img className="linkedinB" src={linkedinB} alt="linkedin" />
							</a>
						</div>
						<div style={{ fontSize: '0.8rem', marginLeft: '10px', marginTop: '2px' }}>Linkedin</div>
						<div className="lineContact" />
						<img className="email" src={emailIco} alt="email" />
						<div style={{ marginTop: '17px', fontWeight: 'bold', fontSize: '1.3rem' }}>julius.kahkonen@gmail.com</div>
					</div>
				</div>
			</div>
			<Foot />
		</React.Fragment>
	);
};

const App = () => {
	//hooks for rendering the "hello" page and the rest
	const [ renderTop, setRenderTop ] = React.useState(true);
	const [ renderBot, setRenderBot ] = React.useState(false);

	//waites some time before rendering rest of the page
	React.useEffect(() => {
		sleep(5000).then(() => {
			setRenderBot(true);
			scroll.scrollTo('bottom', { smooth: true, duration: 2800 });
			setRenderTop(true);
		});
	}, []);

	return (
		<div className="main">
			{renderTop === true ? <Top /> : undefined}
			{renderBot === true ? <Bot /> : undefined}
		</div>
	);
};

export default App;
