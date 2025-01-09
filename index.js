import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_veZG41uBwE5ZETPb3KexgicVPzrIkETTXaJ5WcQT');

// Currency Convertion From - Currency To - Currency and multiple by the units
export async function convertCurrency(fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })
    const multiplier = res.data[toCurrency];
    return multiplier * units;
}

