define([], function () {
    function minFromDates(arrayOfDates) {
        arrayOfDates = _.map(arrayOfDates, function (date) {
            return new Date(date).valueOf();
        });

        return new Date(Math.min.apply(null, arrayOfDates));
    }

    function currencySplitter(currency) {
        return currency.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    }

    function currencyClass(currency) {
        var currencyName;
        switch (currency) {
            case '565eab29aeb95fa9c0f9df2d':
                currencyName = 'dollar';
                break;
            case '565eab34aeb95fa9c0f9df2e':
                currencyName = 'euro';
                break;
            case '565eab3faeb95fa9c0f9df2f':
                currencyName = 'uah';
                break;
        }
        return currencyName;
    }

    function weekSplitter(date) {
        return date.replace(/(\d{4})/, "$1/");
    }

    function spaceReplacer(value) {
        return value.replace(/\s/g, '');
    }

    return {
        minFromDates    : minFromDates,
        currencySplitter: currencySplitter,
        currencyClass   : currencyClass,
        weekSplitter    : weekSplitter,
        spaceReplacer   : spaceReplacer
    };
});