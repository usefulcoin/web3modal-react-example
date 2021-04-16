import React from 'react';

class Trade extends React.Component {
  render() {
  return (
    <React.Fragment>
        {/* Start Content */}
        {/* Start Table */}
        <h2>Exercise Options</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Moneyness</th>
                <th>Value (ETH)</th>
                <th>Settlement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>4</td>
                <td>OUT-OF-THE-MONEY</td>
                <td>176 ETH</td>
                <td>
                  <ul className="actions fit">
                    <li><a href="#" className="button primary icon fit brands fa-ethereum">SETTLE FOR 1.76 ETH</a></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>OUT-OF-THE-MONEY</td>
                <td>78 ETH</td>
                <td>
                  <ul className="actions fit">
                    <li><a href="#" className="button primary icon fit brands fa-ethereum disabled">SETTLED FOR 0.78 ETH</a></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>IN-THE-MONEY</td>
                <td>1300 ETH</td>
                <td>
                  <ul className="actions fit">
                    <li><a href="#" className="button primary icon fit brands fa-ethereum">SETTLE FOR 13 ETH</a></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>OUT-OF-THE-MONEY</td>
                <td>1 ETH</td>
                <td>
                  <ul className="actions fit">
                    <li><a href="#" className="button primary icon fit brands fa-ethereum">SETTLE FOR 0.01 ETH</a></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* End Table */}
        <p>Note: Settlers collect a 1% fee for exercising options.</p>
        {/* End Content */}
    </React.Fragment>
  );
  }
}

export default Trade;
