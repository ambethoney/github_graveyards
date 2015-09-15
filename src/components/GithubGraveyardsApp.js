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
      userName: 'ambethoney',
      repoName: 'Github Graveyard',
      lastUpdate: '9.12.15',
      repoDescription: 'an app to inspire',
      repoUrl: 'www.ambethoney.github.io/githubgraveyard'
    };
  },
  componentWillMount: function(){


  },

  onclick: function(){
    $.ajax({
      // url: 'https://api.github.com/repositories?pushed:<2011-01-01',
      // type: 'GET',
      // dataType: 'JSON',
      // success: function(data){
      //   var repo = data[0];
      //   var repoAuthor = data[0].owner.login;
      //   var repoDetail = data[0].description;
      //   var repoURL = data[0].url;
      //   var repoUpdate = data[0].updated_at;
      // }

    });
  },
  render: function() {
    return (
      <div className="main">
        <div className="inner">
          <h1>Github Graveyard</h1>
          <div id="moon"></div>
          <div id="grass"></div>
          <div id="graves">RIP Ository</div>
          <section>
            <ul>
              <li>Author: {this.state.userName}</li>
              <li>Project Name: {this.state.repoName}</li>
              <li>Description: {this.state.repoDescription}</li>
              <li><a href='{this.state.repoURL}' target="_blank">Check it out &rarr;</a></li>
            </ul>
          </section>
          <button className="btn" onClick = {this.state.onclick}>Click for new repository!</button>
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
React.render(<GithubGraveyardsApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GithubGraveyardsApp;
