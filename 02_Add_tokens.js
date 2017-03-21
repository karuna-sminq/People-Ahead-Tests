describe("Add Tokens", function() {

    var sleep_time = 3000;
    var token_list = [
        '1111111111',
        '2222222222',
        '3333333333',
        '4444444444',
        '5555555555',
        '6666666666',
        '7777777777',
        '8888888888',
        '9999999999',
        '0000000000',
        '1000000000',
        '1000000001',
        '1000000002',
        '1000000003',
        '1000000004',
        '1000000005',
        '1000000006',
        '1000000007',
        '1000000008',
        '1000000009',
        '1000000010',
        '1000000011',
        '1000000012',
        '1000000013',
        '1000000014',
        '1000000015'
    ];

    it("should add n sminqs to queue", function() {

        element(by.css('.add-new-button')).click();

        browser.sleep(sleep_time);

        for (var i = 0; i < token_list.length; i++) {

            // console.log(token_list[i]);
            //Token Details
            element(by.model('mobile')).sendKeys(token_list[i]);

            browser.sleep(sleep_time);

            //Join
            element(by.css('[ng-click="join(mobile, name, reason, selectedQueue, appointmentDate, selectedSlot)"]')).click();

            browser.sleep(5000);

            expect(element(by.css('.md-toast-content')).getText()).toEqual('Token created successfully');

        }

        //
        // //Queue Selection
        // element(by.model('selectedQueue')).click();
        //
        // browser.sleep(sleep_time);
        //
        // var doc_qsel = element.all(by.repeater('queue in queueList'));
        //
        // doc_qsel.get(1).click();
        //
        // browser.sleep(sleep_time);
        //
        // /*= End of 1st sminq =*/
        // /*=============================================<<<<<*/
        //
        // /*=============================================>>>>>
        // = 2nd Sminq =
        // ===============================================>>>>>*/
        //
        // element(by.css('.add-new-button')).click();
        //
        // browser.sleep(sleep_time);
        //
        // //Token Details
        // element(by.model('mobile')).sendKeys(8974398989);
        //
        // browser.sleep(sleep_time);
        //
        // element(by.model('reason')).sendKeys('fever');
        //
        // browser.sleep(sleep_time);
        //
        // //Queue Selection
        // element(by.model('selectedQueue')).click();
        //
        // browser.sleep(sleep_time);
        //
        // var doc_qsel = element.all(by.repeater('queue in queueList'));
        //
        // doc_qsel.get(1).click();
        //
        // browser.sleep(sleep_time);
        //
        // //Join
        // element(by.css('[ng-click="join(mobile, name, reason, selectedQueue, appointmentDate, selectedSlot)"]')).click();
        //
        // browser.sleep(5000);
        //
        // expect(element(by.css('.md-toast-content')).getText()).toEqual('Token created successfully');
        //
        // /*= End of 2nd Sminq =*/
        // /*=============================================<<<<<*/

    });

});
