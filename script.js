async function francoSuico(bt) {
    const api = fetch('https://economia.awesomeapi.com.br/json/last/CHF-BRL')
    const json = await (await api).json();
    bt.innerHTML = `R$ ${Number(json.CHFBRL.bid).toFixed(2).replace('.',',')}`;
}
