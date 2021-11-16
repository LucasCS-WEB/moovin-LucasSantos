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

// SET FUNCTIONS //
class set {
    init() {

        // OPEN/CLOSE NAV QUICKLINK HEADER MOBILE //
        new OpenCloseNavQuicklinkHeaderMobile("hamburguer-menu", 500).return();
        new OpenCloseNavQuicklinkHeaderMobile("close-ul-quicklink-top-mobile").return();

        // OPEN/CLOSE NAV USER ACCOUNT HEADER MOBILE //
        new OpenCloseNavUserAccountHeaderMobile("open-ul-user-account-mobile").return();
        new OpenCloseNavUserAccountHeaderMobile("close-ul-user-account-mobile").return();

    };
};

// INIT FUNCTIONS //
document.addEventListener("DOMContentLoaded", () => {
    new set().init();
});