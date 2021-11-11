(function() {

    "use strict";

    const Moovin_main = {

        //////////////////////
        // CREATE FUNCTIONS //
        //////////////////////
        methods: {
            // OPEN MENU MOBILE - QUICKLINK HEADER //
            openQuicklinkTopMobile: function() {

                const hamburguerMenu = document.getElementById("hamburguer-menu");
                const closeUlQuicklinkTopMobile = document.getElementById("close-ul-quicklink-top-mobile");
                const ulQuicklinkTopMobile = document.getElementById("ul-quicklink-top-mobile");

                hamburguerMenu.addEventListener("click", () => {
                    hamburguerMenu.classList.toggle("active");
                    setTimeout(() => {
                        ulQuicklinkTopMobile.classList.add("ul-quicklink-top-mobile");
                    }, 500);
                });

                closeUlQuicklinkTopMobile.addEventListener("click", () => {
                    hamburguerMenu.classList.toggle("active");
                    ulQuicklinkTopMobile.classList.remove("ul-quicklink-top-mobile");
                });

            },

            // OPEN USER ACCOUNT MOBILE - HEADER //
            openUserAccountMobile: function() {

                const openUlUserAccountMobile = document.getElementById("open-ul-user-account-mobile");
                const closeUlUserAccountMobile = document.getElementById("close-ul-user-account-mobile");
                const ulUserAccountMobile = document.getElementById("ul-user-account-mobile");

                openUlUserAccountMobile.addEventListener("click", () => {
                    ulUserAccountMobile.classList.add("ul-user-account-mobile");
                });

                closeUlUserAccountMobile.addEventListener("click", () => {
                    ulUserAccountMobile.classList.remove("ul-user-account-mobile");
                });

            },

            ////////////////////
            // INIT FUNCTIONS //
            ////////////////////
            init: function() {
                this.openQuicklinkTopMobile(),
                    this.openUserAccountMobile()
            }
        },

        mounted: function() {
            return this.methods.init()
        }

    };

    Moovin_main.mounted();

}());