export default {
    formatCurrency: function (num) {
        return '$' + Number(num).toLocaleString() + ' ';
    }
}