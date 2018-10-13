
import carsPage from '../page_objects/cars.page';
import landingPage from '../page_objects/landing.page';

module.exports =  function() {


    this.Given(/^a client is on the cars page$/, function () {
        // Write code here that turns the phrase above into concrete actions
        carsPage.carsURL();
        carsPage.locationBox.click()
        carsPage.pickUpLocation.setValue('Cairo');
        carsPage.carsConfirm();
        //carsPage.locationBox2.click()
        //carsPage.dropOffLocation.setValue('alexandria');
      });

    this.When(/^the desired filters are applied$/, function () {
        // Write code here that turns the phrase above into concrete actions
        console.log("aasdf")


        carsPage.departCalendar.click();
        carsPage.departDate.click()

        carsPage.departTimeBox.click()


        carsPage.a();
        //carsPage.departTimeBox.setValue('09:00')
        //carsPage.tabBar.click()
        //carsPage.tabBar.setValue()
        //carsPage.tabBar2.click()
        //carsPage.pickUpLocation.setValue('cairo');

      });

    this.Then(/^the desired cars are displayed$/, function () {
        // Write code here that turns the phrase above into concrete actions
        console.log("aasdf")
      });

}




