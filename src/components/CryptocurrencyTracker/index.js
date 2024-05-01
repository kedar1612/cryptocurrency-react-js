// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CrypotcurrencyTracker extends Component {
  state = {cryptocurrenciesData: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencies()
  }

  getCryptocurrencies = async () => {
    const respons = await fetch(apiUrl)
    const data = await respons.json()

    this.setState({
      cryptocurrenciesData: data.map(eachItem => ({
        id: eachItem.id,
        currencyLogoUrl: eachItem.currency_logo,
        currencyName: eachItem.currency_name,
        usdValue: eachItem.usd_value,
        euroValue: eachItem.euro_value,
      })),
      isLoading: false,
    })
  }

  renderCryptocurrencyList = () => {
    const {cryptocurrenciesData} = this.state

    return <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
  }

  rednderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? this.rednderLoader() : this.renderCryptocurrencyList()}
      </div>
    )
  }
}
export default CrypotcurrencyTracker
