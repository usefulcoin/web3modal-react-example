import React from 'react';

class Trade extends React.Component {
  render() {
  return (
    <React.Fragment>
        {/* Start Content */}
        {/* Start Form */}
        <h2>Buy Options</h2>
        <div className="table-wrapper">
          <table className="alt">
            <thead>
              <tr>
                <th>Pair</th>
                <th>Oracle Update</th>
                <th>Last Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>WBTC/USD</td>
                <td>#252436266.</td>
                <td>$67029.99</td>
              </tr>
              <tr>
                <td>LINK/USD</td>
                <td>#250436266.</td>
                <td>$99.13</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form method="post" action="#">
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="premium" id="premium" defaultValue placeholder="Premium / Size (e.g. 1 ETH)" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="text" name="expiration" id="expiration" defaultValue placeholder="Expiration / Oracle Responses (e.g. 1 update)" />
            </div>
            {/* Break */}
            <div className="col-12">
              <select name="underlying" id="underlying">
                <option value>Underlying Asset</option>
                <option value={1}>WBTC/USD</option>
                <option value={2}>LINK/USD</option>
              </select>
            </div>
            {/* Break */}
            <div className="col-4 col-12-small">
              <input type="radio" id="call-contracts" name="type-of-contract" defaultChecked />
              <label htmlFor="call-contracts">Call</label>
            </div>
            <div className="col-4 col-12-small">
              <input type="radio" id="put-contracts" name="type-of-contract" />
              <label htmlFor="put-contracts">Put</label>
            </div>
            <div className="col-4 col-12-small">
              <ul className="actions">
                <li><input type="submit" defaultValue="Purchase Binary Options" className="primary" /></li>
              </ul>
            </div>
          </div>
        </form>
        {/* End Form */}
        <p>Note: Traders pay a 1% transaction fee for in-the-money options.</p>
        {/* End Content */}
    </React.Fragment>
  );
  }
}

export default Trade;
