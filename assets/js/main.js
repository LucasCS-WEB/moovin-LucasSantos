'use strict';

// OPEN/CLOSE NAV QUICKLINK HEADER MOBILE //
class OpenCloseNavQuicklinkHeaderMobile {

    constructor(actionOpenClose, delaySetTimeOut) {

        this.actinOpenCloseQuicklinkTopMobile = document.getElementById(actionOpenClose);
        this.delaySetTimeOut = delaySetTimeOut;
        this.hamburguerMenu = document.getElementById("hamburguer-menu");
        this.ulQuicklinkTopMobile = document.getElementById("ul-quicklink-top-mobile");

    };

    return () {

        this.actinOpenCloseQuicklinkTopMobile.addEventListener("click", () => {
            this.hamburguerMenu.classList.toggle("active");
            setTimeout(() => {
                this.ulQuicklinkTopMobile.classList.toggle("ul-quicklink-top-mobile");
            }, this.delaySetTimeOut);
        });

    };

};

// OPEN/CLOSE NAV USER ACCOUNT HEADER MOBILE //
class OpenCloseNavUserAccountHeaderMobile {

    constructor(actionOpenClose) {

        this.openCloseUlUserAccountMobile = document.getElementById(actionOpenClose);
        this.ulUserAccountMobile = document.getElementById("ul-user-account-mobile");

    };

    return () {

        this.openCloseUlUserAccountMobile.addEventListener("click", () => {
            this.ulUserAccountMobile.classList.toggle("ul-user-account-mobile");
        });

    };

};

///////////////////////////////
// PASSING SUBJECTS OBSERVER //
///////////////////////////////
const init = () => {

    // OPEN/CLOSE NAV QUICKLINK HEADER MOBILE - (actionOpenClose, delaySetTimeOut) //
    new OpenCloseNavQuicklinkHeaderMobile("hamburguer-menu", 500).return();
    new OpenCloseNavQuicklinkHeaderMobile("close-ul-quicklink-top-mobile", 0).return();

    // OPEN/CLOSE NAV USER ACCOUNT HEADER MOBILE - (actionOpenClose) //
    new OpenCloseNavUserAccountHeaderMobile("open-ul-user-account-mobile").return();
    new OpenCloseNavUserAccountHeaderMobile("close-ul-user-account-mobile").return();

};

document.addEventListener("DOMContentLoaded", () => {
    init();
});