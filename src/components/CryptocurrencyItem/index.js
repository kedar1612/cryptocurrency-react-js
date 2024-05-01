// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {currencyLogoUrl, currencyName, usdValue, euroValue} =
    cryptocurrencyDetails

  return (
    <li className="cryptocurrency-item">
      <div className="logo-container">
        <img className="logo-image" src={currencyLogoUrl} alt={currencyName} />\
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-value">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
