class Moovin_Main {
    //////////////////////
    // CREATE FUNCTIONS //
    //////////////////////

    // OPEN NAV MOBILE - QUICKLINK HEADER //
    openQuicklinkTopMobile() {

        const hamburguerMenu = document.getElementById("hamburguer-menu"),
            closeUlQuicklinkTopMobile = document.getElementById("close-ul-quicklink-top-mobile"),
            ulQuicklinkTopMobile = document.getElementById("ul-quicklink-top-mobile");

        hamburguerMenu.addEventListener("click", () => {
            hamburguerMenu.classList.toggle("active"),
                setTimeout(() => {
                    ulQuicklinkTopMobile.classList.toggle("ul-quicklink-top-mobile");
                }, 500);
        }), closeUlQuicklinkTopMobile.addEventListener("click", () => {
            hamburguerMenu.classList.toggle("active"),
                ulQuicklinkTopMobile.classList.toggle("ul-quicklink-top-mobile");
        });

    }

    // OPEN NAV USER ACCOUNT MOBILE - HEADER //
    openUserAccountMobile() {

        const openUlUserAccountMobile = document.getElementById("open-ul-user-account-mobile"),
            closeUlUserAccountMobile = document.getElementById("close-ul-user-account-mobile"),
            ulUserAccountMobile = document.getElementById("ul-user-account-mobile");

        openUlUserAccountMobile.addEventListener("click", () => {
            ulUserAccountMobile.classList.toggle("ul-user-account-mobile");
        }), closeUlUserAccountMobile.addEventListener("click", () => {
            ulUserAccountMobile.classList.toggle("ul-user-account-mobile");
        });

    }

    init() {
        ////////////////////
        // INIT FUNCTIONS //
        ////////////////////
        this.openQuicklinkTopMobile(),
            this.openUserAccountMobile()
    }

    mounted() {
        this.init();
    }
}

const init = new Moovin_Main();
init.mounted();