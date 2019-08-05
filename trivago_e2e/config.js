exports.config = {
    specs: ['./specs/purchaseTest.js'],
    params: {
        homepage: {
            searchItem: 'LUNDHAGS'
        },
        item: {
            itemWeight: '620 g',
            returnPolicy: '30 days returns policy'
        },
        cart: {
            voucher: 'NotAvailable',
            redeemVoucherErrorMessage: 'Reason: This voucher is not valid!'
        }
    }
};