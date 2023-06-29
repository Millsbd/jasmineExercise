describe('payment testing with set up and clean up'), function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    it('adds a new payment to all payments when payments are submitted', function(){
      submitPaymentInfo();
      
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment 1'].billAmt).toEqual(100);
      expect(allPayments['payment 1'].tipAmt).toEqual(20);
      expect(allPayments['payment 1'].tipPercent).toEqual(20);
    });

    it('should not add a new payment if an empty input is submitted', function(){
        billAmtInput.value = "";
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should create a new payment',function(){
        let expectPayment = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20,
        }

        expect(createCurPayment()).toEqual(expectPayment);
    });

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};

    });
};

