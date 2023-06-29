describe('helpers test with setup and clean up', function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should sum total tip amount of all payments in sumPaymentTotal()', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 500;
        tipAmtInput.value = 100;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(120);
    });

    it('should sum total bill amount of all payments in sumPaymentTotal()', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 500;
        tipAmtInput.value = 100;
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(600);
    });

    it('should sum total tip percentage on sumPaymentTotal()', function(){
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 10;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(30);
    });

    it('should creeate a new td from a value and append to tr with appendTd(tr,value)', function(){
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerText).toEqual('test');
    });




afterEach(function(){
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    allPayments = {};
    paymentId = 0;
})

})

