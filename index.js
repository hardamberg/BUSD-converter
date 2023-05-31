function convertBUSD() {
    const busdAmount = document.getElementById("busd-amount").value;

    // Make API request to fetch the conversion rate
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=binance-usd&vs_currencies=ngn";
    $.get(url, function(data) {
      const conversionRate = data["binance-usd"]["ngn"];
      const ngnAmount = busdAmount * conversionRate;

      // Display the result
      document.getElementById("result").innerHTML = `${busdAmount} BUSD = ${ngnAmount} NGN`;
    });
  }