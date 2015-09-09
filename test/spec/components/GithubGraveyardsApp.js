'use strict';

describe('GithubGraveyardsApp', () => {
  let React = require('react/addons');
  let GithubGraveyardsApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GithubGraveyardsApp = require('components/GithubGraveyardsApp.js');
    component = React.createElement(GithubGraveyardsApp);
  });

  it('should create a new instance of GithubGraveyardsApp', () => {
    expect(component).toBeDefined();
  });
});
