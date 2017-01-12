var atlImages = [
	'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
	'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
	'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

var About = React.createClass({
	render: function(){
		return(
			<div>
				Atlanta is the capital of and the most populous city in the U.S. state of Georgia, with an estimated 2015 population of 463,878.[6] Atlanta is the cultural and economic center of the Atlanta metropolitan area, home to 5,710,795 people and the ninth largest metropolitan area in the United States.[13] Atlanta is the county seat of Fulton County, and a small portion of the city extends eastward into DeKalb County.
			</div>
		)
	}
})

function MayorMessage(props){
	return(
		<div id="ctl00_content_Screen">
			<p>It is a great time to be in the City of Atlanta!</p>
			<p>Whether you’re a native, first time visitor, business traveler who makes regular stops here, or one of the thousands of new residents to our city, you’ve experienced first-hand the many ways in which Atlanta is ascendant and thriving. From our world-class airport—the world’s busiest—to our rapidly expanding business community to our diverse neighborhoods with their first-rate restaurants, shops and amenities, the City of Atlanta has it all. And as Mayor, I am proud to invite you to experience everything that makes Atlanta the cultural and economic capital of the South.</p>
			<p>Last year alone, Atlanta reached several important milestones. Hartsfield-Jackson Atlanta International Airport solidified its position as the world’s busiest passenger airport by becoming the first in the world to serve 100 million passengers in a single year. And with our recently-announced, $6 billion capital plan, we’re going to expand and add more amenities to make your travel experience safer and even more pleasant.&nbsp;</p>
			<p>Our new infrastructure bond program, Renew Atlanta, represents the single largest investment in the look, feel and experience of the City of Atlanta in almost 30 years. Through this program, we are improving our roads, bridges, sidewalks and other critical infrastructure to make Atlanta easier to navigate and highlight the true beauty of our city.</p>
			Atlanta is also experiencing both an economic development and population boom. In 2015, we added more new residents than at any time since the period of the Centennial Olympic Games in 1996. As we’re adding new residents, we are also adding thousands of new jobs. Companies are voting with their feet.  In 2015 alone, 13 companies either moved their headquarters here or made significant corporate expansions within the city’s limits.
			<p>
			</p>
			<p>This has led to a development boom that is transforming the Atlanta skyline. There are currently $1.2 billion in commercial developments either under construction or in the pipeline in the City of Atlanta, with much more to come.&nbsp;</p>
			Not only is Atlanta a great place to live and work, but it is a great place to play. If you are visiting our city, I encourage you to explore the many attractions Atlanta has to offer including: the Dr. Martin L. King Jr. Center, the Georgia Aquarium, the World of Coca-Cola, CNN Center, Centennial Olympic Park, Woodruff Arts Center, Atlanta Botanical Garden, Children’s Museum of Atlanta, the National Center for Civil and Human Rights, the Atlanta BeltLine, the Atlanta Streetcar and many more.  We invite you to share in our Southern hospitality, sample cuisine at our many fine restaurants and enjoy the rich and diverse heritage of our city.
			<p>
			</p>
			By every measure, we are a city on the rise. As we see more world-class developments and continued growth, I am proud to share it with you all.
			<p>Sincerely,</p>
			<p>Mayor Kasim Reed</p>
		</div>
	)
}

var Atlanta = React.createClass({
	getInitialState: function() {
		return({
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""
		})
	},
	componentDidMount: function() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		$.getJSON(url, (weatherData) =>{
			console.log(weatherData);
			this.setState({
				temp: weatherData.main.temp,
				temp_max: weatherData.main.temp_max,
				temp_min: weatherData.main.temp_min,
				icon: weatherData.weather[0].icon,
				desc: weatherData.weather[0].description,
			})
		});
	},
	render: function(){
		return(
			<div>
				<h1>Real-time Atlanta Weather!</h1>
				<p>The temp is: {this.state.temp}</p>
			</div>
		);
	}
});

function Images(props){
	// Map through images
	return(
		<p>Images go here as props</p>
	)
}

function Home(props){
	return (
		<h1>A page about Atlanta!</h1>
	)
}

var BootstrapNavBar = React.createClass({
  render: function(){
    return(
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="#">WebSiteName</a>
		    </div>
		    <ul className="nav navbar-nav">
		    	<li><ReactRouter.Link to="/">Home</ReactRouter.Link></li>
		      	<li><ReactRouter.Link to="/one">One</ReactRouter.Link></li>
		      	<li><ReactRouter.Link to="/two">Two</ReactRouter.Link></li>
		      	<li><ReactRouter.Link to="/three">Three</ReactRouter.Link></li>
		      	<li><ReactRouter.Link to="/four">Four</ReactRouter.Link></li>
		    </ul>
		  </div>
		</nav>    
	)
  }
});

var App = React.createClass({
	render: function(){
		return(
			<div>
				<BootstrapNavBar />
				<div className="main">
					<h1>Main App</h1>
				</div>
			</div>
		);
	}
})


ReactDOM.render(
	<App />,
	document.getElementById('app')
)