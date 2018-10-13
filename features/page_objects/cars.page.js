import { Page } from './page';

class CarsPage extends Page {

    get locationBox() { return browser.element('#s2id_carlocations > a'); }
    get pickUpLocation () { return browser.element('#select2-drop > div > input'); }
    get locationBox2() { return browser.element('#s2id_carlocations > a'); }
    get dropOffLocation () { return browser.element('#select2-drop > div > input'); }

    get departCalendar () { return browser.element('#departcar'); }
    get departDate () { return browser.element('body > div:nth-child(13) > div.datepicker-days > table > tbody > tr:nth-child(3) > td:nth-child(2)'); }

    get departTimeBox () { return browser.element('#body-section > div.search_head > div > form > div:nth-child(4) > div > select'); }
    get departTime () { return browser.element('#body-section > div.search_head > div > form > div:nth-child(4) > div > select'); }



    a() { 
        var selectBox = this.departTimeBox
        console.log(selectBox.getValue()); // returns "someValue0"
        //selectBox.setValue('06:00') ////  HERE TO CONTINUE TRYING TO FIND OUT ABOUT Error: An element command could not be completed because the element is in an invalid state (e.g. attempting to click a disabled element).at elementIdValue

        //selectBox.selectByValue('someValue3');
        // console.log(selectBox.getValue()); // returns "someValue3"
    
        //var selectBox = this.departTimeBox
        //console.log(selectBox.getText('option:checked')); // returns "uno"
    
        //selectBox.selectByVisibleText('cuatro');
        //console.log(selectBox.getText('option:checked')); // returns "cuatro"

    }

    carsURL() {
        browser.url('http://www.phptravels.net/cars');
    }
    
    carsConfirm() {
        browser.click('#select2-drop > ul > li > div');
    }


}
 
export default new CarsPage();
