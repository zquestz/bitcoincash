/*global $ jQuery window setTimeout */

// A comma separated list of currencies to display.
var ticker_currencies = "USD,EUR,JPY,CNY";

// Update interval in ms.
var update_interval = 30000;

function ticker(currencies) {
    var symbols = {
        USD: "$",
        CNY: "¥",
        JPY: "¥",
        EUR: "€"
    };

    $.ajax({
        type: "GET",
        url:
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash&vs_currencies=" +
            currencies.toLowerCase(),
        contentType: "application/json; charset=utf-8",
        timeout: 6000,
        error: function (x, t, m) {
            if (!$("#ticker_value").html().includes("BCH")) {
                $("#ticker_value").html("N/A");
            }
        },
        success: function (response) {
            var output = [];
            var currencyRates = response["bitcoin-cash"] || {};

            $.each(currencyRates, function (currency, price) {
                var sym = symbols[currency.toUpperCase()];

                if (sym === undefined) {
                    return;
                }

                output.push(
                    "BCH/" + currency.toUpperCase() + "&nbsp;" + sym + price
                );
            });

            if (output.length > 0) {
                $("#ticker_value").html(output.join(" &bull; "));
                return;
            }

            if (!$("#ticker_value").html().includes("BCH")) {
                $("#ticker_value").html("N/A");
            }
        }
    })
        .done(function () {
            setTimeout(function () {
                ticker(ticker_currencies);
            }, update_interval);
        })
        .fail(function () {
            setTimeout(function () {
                ticker(ticker_currencies);
            }, update_interval);
        });
}

ticker(ticker_currencies);
