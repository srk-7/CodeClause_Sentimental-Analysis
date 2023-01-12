import React, { Component } from 'react';
import './App.css';
import Sentiment from 'sentiment';
const sentiment = new Sentiment();

class App extends Component
{
	constructor(props) {
		super(props);
		this.state= {
			sentimentScore: null,
			generalSentiment: null
		};
		this.findSentiment=this.findSentiment.bind(this);
	}
	
	findSentiment(event) {
		const result=sentiment.analyze(event.target.value)
		this.setState({
			sentimentScore: result.score
		})
		if(result.score < 0){
			this.setState({
				generalSentiment:'Negative'
			})
		}
		else if(result.score > 0)
		{
			this.setState({
				generalSentiment:'Positive'
			})
		}
		else{
			this.setState({
				generalSentiment:'Neutral'
			})
		}
	}
	
	render() { 
		const mysty = {
			color: "black",
		    backgroundColor: "lightblue",
		    padding: "10px",
		    fontFamily: "Courier",
		};
		return (
			<div className="App">
				<h1 style={mysty}>Sentiment Analysis</h1>
				<p><i>Enter text to analyze the sentiment:</i></p>
				<textarea onChange={this.findSentiment} />
				<p><b>Sentiment Score : </b>{this.state.sentimentScore}</p>
				<p><b>Type of Sentiment : </b>{this.state.generalSentiment}</p>
			</div>
		)
	}
}
export default App;