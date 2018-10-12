import { Page } from './page';

class CarsPage extends Page {


    get carsTab() { return browser.elements('#collapse > ul.nav.navbar-nav.go-right > li.main-lnk.go-right.active > a'); }

    /* 
    get tabBar()      { return browser.elements('.profile-tabs > li'); }
    get bookings()    { return this.tabBar.value[0]; }
    get profile()     { return this.tabBar.value[1]; }
    get whishlist()   { return this.tabBar.value[2]; }
    get newsletter()  { return this.tabBar.value[3]; }
    get hotels()      { return browser.elements('#bookings > .row').value; }
 */

}

export default new CarsPage();
