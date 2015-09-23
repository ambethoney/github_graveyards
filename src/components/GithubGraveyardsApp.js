'use strict';


var $ = require('jquery');
var React = require('react/addons');
// var ReactCSSTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');


var GithubGraveyardsApp = React.createClass({

  getInitialState: function(){
    return {
     repoSource: [],
     repoOwner:[]
    };
  },
  batFly: function(){
    $('.bat').addClass('fly');
    setTimeout(function () {
      $('.bat').removeClass('fly');
    }, 2000);
  },
  onclick: function(){
    $.get(this.props.source, function(result){
      var num = Math.floor(Math.random()*result.length);
      var repoInfo = result[num];
      this.setState({
        repoSource: repoInfo,
        repoOwner:repoInfo.owner
      });
    }.bind(this));
  },
  render: function() {
    // repoStuff = this.state.repoSource || [];
    return (
      <div className="main">
        <div className="inner">
          <h1>Github Graveyard</h1>
          <div id="moon"></div>
          <div id="grass"></div>
          <div id="graves">RIP<br/><br/>Ository</div>
          <section>
            <ul>
              <li><strong>User:</strong> {this.state.repoOwner.login}</li>
              <li><strong>Repo:</strong> {this.state.repoSource.name}</li>
              <li><strong>Description:</strong> {this.state.repoSource.description}</li>
              <li><strong><a href={this.state.repoSource.html_url} target="_blank">Check it out!</a></strong></li>
            </ul>
          </section>
          <button className="btn" onClick = {this.onclick} onMouseEnter={this.batFly}>Click for new repository!</button>
          <div id="btn-shadow"></div>
        </div>
        <img src="../images/ghost.png" className="ghost one"/>
        <img src="../images/ghost.png" className="ghost three"/>
        <img src="../images/ghost.png" className="ghost four right"/>

        <img src="../images/bat.png" className="bat uno"/>
        <img src="../images/bat.png" className="bat dos"/>



      </div>
    );
  }
});


// var GetRepos = React.createClass({

// })
React.render(<GithubGraveyardsApp source ="https://api.github.com/repositories?pushed:<2011-01-01" />, document.getElementById('content')); // jshint ignore:line

module.exports = GithubGraveyardsApp;
