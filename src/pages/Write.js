import React from 'react';

class Trade extends React.Component {
  render() {
  return (
    <React.Fragment>
        {/* Start Content */}
        {/* Start Form */}
        <h2>Sell Options</h2>
        <div className="table-wrapper">
          <table className="alt">
            <thead>
              <tr>
                <th>TVL</th>
                <th>Utilization</th>
                <th>Contributed</th>
                <th>Withdrawable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>600 ETH</td>
                <td>10% Utilized</td>
                <td>0 ETH</td>
                <td>0 ETH</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form method="post" action="#">
          <div className="row gtr-uniform">
            <div className="col-12">
              <input type="text" name="contribution" id="contribution" defaultValue placeholder="Quantity (e.g. 1 ETH)" />
            </div>
            {/* Break */}
            <div className="col-4 col-12-small">
              <input type="radio" id="contribute" name="interaction" defaultChecked />
              <label htmlFor="contribute">Add Liquidity</label>
            </div>
            <div className="col-4 col-12-small">
              <input type="radio" id="withdrawal" name="interaction" />
              <label htmlFor="contribute">Remove Liquidity</label>
            </div>
            <div className="col-4 col-12-small">
              <ul className="actions">
                <li><input type="submit" defaultValue="Execute" className="primary" /></li>
              </ul>
            </div>
          </div>
        </form>
        {/* End Form */}
        <p>Note: Funds contributed are locked for 14 days.</p>
        {/* End Content */}
    </React.Fragment>
  );
  }
}

export default Trade;
