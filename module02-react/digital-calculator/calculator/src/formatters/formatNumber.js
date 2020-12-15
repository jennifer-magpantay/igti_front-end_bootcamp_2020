const formatNum = Intl.NumberFormat("en-UK");
function formatNumber(value) {
    return formatNum.format(value);
}

export { formatNumber }