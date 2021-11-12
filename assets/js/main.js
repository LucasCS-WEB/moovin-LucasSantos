! function() {

    "use strict";

    ({

        //////////////////////
        // CREATE FUNCTIONS //
        //////////////////////
        methods: {



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