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
			currentTemp: "",
			currentCode: "",
			currentCondition: "",
			name: "",
			windSpeed: "",
			temp_min: "",
			temp_max: "",
			humidity: "",
			desc: ""
		})
	},
	componentDidMount: function() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		$.getJSON(url, (weatherData) =>{
			this.setState({
				weatherData: weatherData,
				currentTemp: weatherData.main.temp,
				currentCode: weatherData.weather[0].id,
				currentCondition: weatherData.weather[0].description,
				name: weatherData.name,
				icon: weatherData.weather[0].icon + '.png',
				windSpeed: weatherData.wind.speed,
				temp_max: weatherData.main.temp_max,
				temp_min: weatherData.main.temp_min,
				humidity: weatherData.main.humidity,
				desc: weatherData.weather[0].description
			})
		
			$(document).ready(function(){
				// console.log(weatherData);
				var currentCode = weatherData.weather[0].id;
				var currentCondition = weatherData.weather[0].description;
				var windSpeed = weatherData.wind.speed;
				var humidity = weatherData.main.humidity;
				var currentTemp = weatherData.main.temp;
				var icon = weatherData.weather[0].icon + '.png';
				$('#currentTemp').html("<img src='http://openweathermap.org/img/w/"+ icon +"'></img>The temp is currently " + currentTemp);
				var canvas = $('#weather-canvas');
				var context = canvas[0].getContext('2d');
				$('#wind span').html(windSpeed);
				$('#humidity span').html(humidity);

				var lineColor = 'black';
				if(currentTemp < 32){
					lineColor = '#AAF7FF';
				}else if(currentTemp < 60){
					lineColor = '#129793';
				}else if(currentTemp < 70){
					lineColor = '#80f470';
				}else if(currentTemp < 80){
					lineColor = '#ffc32d';
				}else{
					lineColor = '#f74f5d';
				}

				if(currentCode < 300){
					$('.container').css('background-image', 'url("thunderstorm.jpg")');
				}else if(currentCode < 400){
					$('.container').css('background-image', 'url("drizzle.jpg")');
				}else if(currentCode < 505){
					$('.container').css('background-image', 'url("rain.jpg")');
				}else if(currentCode == 511){
					$('.container').css('background-image', 'url("freezing-rain.jpg")');
				}else if(currentCode < 540){
					$('.container').css('background-image', 'url("heavy-rain.jpg")');
				}else if(currentCode < 650){
					$('.container').css('background-image', 'url("snow.jpg")');
				}else if(currentCode < 790){
					$('.container').css('background-image', 'url("mist.jpg")');
				}else if(currentCode == 800){
					$('.container').css('background-image', 'url("clear-sky.jpg")');
				}else if(currentCode == 801){
					$('.container').css('background-image', 'url("few-clouds.jpg")');
				}else if(currentCode < 805){
					$('.container').css('background-image', 'url("cloudy.jpg")');
				}else{
					$('.container').css('background-image', 'url("wind.jpg")');
				}

				
				var currentPercent = 0;
				function animate(current){
					context.clearRect(0,0,500, 500);
					context.fillStyle = "rgba(100,100,100,.4)";
					context.beginPath();
					context.arc(155,75,50,Math.PI * 0,Math.PI * 2);
					context.closePath();
					context.fill();

					context.font = "20px Arial";
					context.fillStyle = '#333';
					context.fillText(currentCondition,20,30);

					context.font = "40px Arial";
					context.fillStyle = '#FFF';
					context.fillText((Math.floor(currentTemp) + "\xB0F"),110,90);

					context.lineWidth = 20;
					context.strokeStyle = lineColor;
					context.beginPath();
					context.arc(155,75,60,Math.PI * 1.5,Math.PI * 2 * current + Math.PI * 1.5);
					context.stroke();
					currentPercent++;
					if(currentPercent < currentTemp){
						requestAnimationFrame(function(){
							animate(currentPercent / 100);
						});
					}

				}
				animate();
			});
		});
	},

	render: function(){
		return(
			<div className="container">
				<div className="row text-center weather-row">
					<h1>Real-time Atlanta Weather!</h1>

					<div id="currentTemp">
					</div>

					<canvas id="weather-canvas">
					</canvas>
					<div id="weather-details">
						<div id="wind">
							Wind: <span></span> mph
						</div>
						<div id="humidity">
							Humidity: <span></span>%
						</div>
					</div>
				</div>
			</div>
		);
	}
});

function Images(props){
	return(
		<div>
			{props.route.images.map(function(image, index){
				return <img className="atlImage" key={index} src={image}/>
			})}
		</div>		
	)
}

function Home(props){
	return (
		<div>
		<h1>A page about Atlanta!</h1>
		<MayorMessage />
		</div>
	)
}

var BootstrapNavBar = React.createClass({
  render: function(){
    return(
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand" >Welcome to the ATL</a>
		    </div>
		    <ul className="nav navbar-nav">
		    	<li><ReactRouter.Link activeClassName="active" to="/">Home</ReactRouter.Link></li>
		      	<li><ReactRouter.Link activeClassName="active" to="/about">About</ReactRouter.Link></li>
		      	<li><ReactRouter.Link activeClassName="active" to="/images">Images</ReactRouter.Link></li>
		      	<li><ReactRouter.Link activeClassName="active" to="/weather">Weather</ReactRouter.Link></li>
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
				<div className="main col-sm-8 col-sm-offset-2">
					{this.props.children}
				</div>
			</div>
		);
	}
})


ReactDOM.render(
	<ReactRouter.Router>
		<ReactRouter.Route path="/" component={App}>
			<ReactRouter.IndexRoute component={Home} />
			<ReactRouter.Route path="/about" component={About} />
			<ReactRouter.Route path="/images" component={Images} images={atlImages} />
			<ReactRouter.Route path="/weather" component={Atlanta} />
		</ReactRouter.Route>
	</ReactRouter.Router>,
	document.getElementById('app')
)