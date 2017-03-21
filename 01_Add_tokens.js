describe("Add Tokens", function () {

  it("should add 2 sminqs to queue", function () {

    /*=============================================>>>>>
    = 1st sminq =
    ===============================================>>>>>*/

    element(by.css('.add-new-button')).click();

    browser.sleep(sleep_time);

    //Token Details
    element(by.model('mobile')).sendKeys(9865412321);

    browser.sleep(sleep_time);

    element(by.model('reason')).sendKeys('sick');

    browser.sleep(sleep_time);

    //Queue Selection
    element(by.model('selectedQueue')).click();

    browser.sleep(sleep_time);

    var doc_qsel = element.all(by.repeater('queue in queueList'));

    doc_qsel.get(1).click();

    browser.sleep(sleep_time);

    //Join
    element(by.css('[ng-click="join(mobile, name, reason, selectedQueue, appointmentDate, selectedSlot)"]')).click();

    browser.sleep(5000);

    expect(element(by.css('.md-toast-content')).getText()).toEqual('Token created successfully');

    /*= End of 1st sminq =*/
    /*=============================================<<<<<*/

    /*=============================================>>>>>
    = 2nd Sminq =
    ===============================================>>>>>*/

    element(by.css('.add-new-button')).click();

    browser.sleep(sleep_time);

    //Token Details
    element(by.model('mobile')).sendKeys(8974398989);

    browser.sleep(sleep_time);

    element(by.model('reason')).sendKeys('fever');

    browser.sleep(sleep_time);

    //Queue Selection
    element(by.model('selectedQueue')).click();

    browser.sleep(sleep_time);

    var doc_qsel = element.all(by.repeater('queue in queueList'));

    doc_qsel.get(1).click();

    browser.sleep(sleep_time);

    //Join
    element(by.css('[ng-click="join(mobile, name, reason, selectedQueue, appointmentDate, selectedSlot)"]')).click();

    browser.sleep(5000);

    expect(element(by.css('.md-toast-content')).getText()).toEqual('Token created successfully');

    /*= End of 2nd Sminq =*/
    /*=============================================<<<<<*/

  });

});
