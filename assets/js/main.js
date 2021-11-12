! function() {

    "use strict";

    ({

        //////////////////////
        // CREATE FUNCTIONS //
        //////////////////////
        methods: {

            // OPEN MENU MOBILE - QUICKLINK HEADER //
            openQuicklinkTopMobile: function() {

                const hamburguerMenu = document.getElementById("hamburguer-menu"),
                    closeUlQuicklinkTopMobile = document.getElementById("close-ul-quicklink-top-mobile"),
                    ulQuicklinkTopMobile = document.getElementById("ul-quicklink-top-mobile");

                hamburguerMenu.addEventListener("click", (() => {
                    hamburguerMenu.classList.toggle("active"),
                        setTimeout((() => {
                            ulQuicklinkTopMobile.classList.toggle("ul-quicklink-top-mobile")
                        }), 500)
                })), closeUlQuicklinkTopMobile.addEventListener("click", (() => {
                    hamburguerMenu.classList.toggle("active"),
                        ulQuicklinkTopMobile.classList.toggle("ul-quicklink-top-mobile")
                }))

            },

            // OPEN USER ACCOUNT MOBILE - HEADER //
            openUserAccountMobile: function() {

                const openUlUserAccountMobile = document.getElementById("open-ul-user-account-mobile"),
                    closeUlUserAccountMobile = document.getElementById("close-ul-user-account-mobile"),
                    ulUserAccountMobile = document.getElementById("ul-user-account-mobile");

                openUlUserAccountMobile.addEventListener("click", (() => {
                    ulUserAccountMobile.classList.toggle("ul-user-account-mobile")
                })), closeUlUserAccountMobile.addEventListener("click", (() => {
                    ulUserAccountMobile.classList.toggle("ul-user-account-mobile")
                }))

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

    }).mounted()

}();