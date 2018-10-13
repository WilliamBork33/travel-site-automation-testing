import { Page } from './page';

class CarsPage extends Page {

    get locationBox() { return browser.element('#s2id_carlocations > a'); }
    get pickUpLocation () { return browser.element('#select2-drop > div > input'); }
    get locationBox2() { return browser.element('#s2id_carlocations > a'); }
    get dropOffLocation () { return browser.element('#select2-drop > div > input'); }

    carsURL() {
        browser.url('http://www.phptravels.net/cars');
    }
    

}
 
export default new CarsPage();
