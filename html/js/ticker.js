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
            "https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=" +
            currencies,
        contentType: "application/json; charset=utf-8",
        timeout: 6000,
        error: function (x, t, m) {
            if (!$("#ticker_value").html().includes("BCH")) {
                $("#ticker_value").html("N/A");
            }
        },
        success: function (currencyRates) {
            var output = [];

            $.each(currencyRates, function (currency, price) {
                var sym = symbols[currency];

                if (sym === undefined) {
                    return;
                }

                output.push("BCH/" + currency + "&nbsp;" + sym + price);
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
