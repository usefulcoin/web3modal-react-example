import React from 'react';

class About extends React.Component {
  render() {
  return (
    <React.Fragment>
      {/* Start Content */}
      <article className="post featured">
        <header className="major">
          <span className="date"><img src="images/biop-brand-icon-128x128px.png" width="10%" alt="brand icon" /></span>
          <h2>EASY OPTIONS</h2>
          <p>The binary options settlement protocol ("<b>BIOPSET</b>") is the most transparent programmatic
            clearinghouse for buying and selling binary options. All users ("<b>settlers</b>") may leverage the
            protocol to earn fees for settling on-demand binary options offered by liquidity providers
            ("<b>writers</b>") seeking to earn premiums from price speculators ("<b>traders</b>"). Read more
            <a href="https://docs.biopset.com">here</a>, or click the button to connect your Web3 wallet and launch the
            application. Do not use BIOPSET in regulated jurisdictions.</p>
        </header>
        <ul className="actions special">
          <li><a href="/trade" className="button large">LAUNCH APP</a></li>
        </ul>
        <p />
      </article>
      {/* End Content */}
    </React.Fragment>
  );
  }
}

export default About;
