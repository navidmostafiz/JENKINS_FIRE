function popupCallbackFunction1(response) {
    console.log('successCallbackFun', response);
    $('#box1').append(listSresponsetring);
}

popupFunction1(function (position) {
    console.log('popupFunction1 called', position);
    apiCallHandler('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR', popupCallbackFunction1);
});