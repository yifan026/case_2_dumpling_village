<template>

    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary">
                <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
                    <md-icon class="i">menu</md-icon>
                </md-button>
                <span class="md-title">Drinks and Desserts</span>
            </md-app-toolbar>

            <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <span>Menu</span>

                    <div class="md-toolbar-section-end">
                        <md-button class="md-icon-button md-dense" @click="toggleMenu">
                            <md-icon>keyboard_arrow_left</md-icon>
                        </md-button>
                    </div>
                </md-toolbar>

                <md-list>
                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>
                        <span class="md-list-item-text">Drinks and Desserts</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>send</md-icon>
                        <span class="md-list-item-text">Appetizers</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>delete</md-icon>
                        <span class="md-list-item-text">Buns</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>error</md-icon>
                        <span class="md-list-item-text">Dumplings</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>

            <md-app-content>
                <md-list class="md-double-line">
                    <md-list-item>
                        <md-card>
                            <md-card-media class="div_center">
                                <img src="../assets/pork and scallions steamed buns.jpeg" alt="Xiaolong bao">
                            </md-card-media>

                            <md-card-header class="div_center">
                                <div class="md-title">Title goes here</div>
                                <!--<div class="md-subhead">Subtitle here</div>-->
                            </md-card-header>

                            <!--<md-card-actions>-->
                            <!--<md-button>Action</md-button>-->
                            <!--<md-button>Action</md-button>-->
                            <!--</md-card-actions>-->

                            <md-card-content class="wrap_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum
                                odio.
                                Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate
                                pariatur in
                                deleniti minus sint. Excepturi.
                            </md-card-content>
                        </md-card>

                    </md-list-item>
                    <md-list-item>
                        <md-card>
                            <md-card-media class="div_center">

                                <img src="../assets/pork and scallions steamed buns.jpeg" alt="Xiaolong bao">

                            </md-card-media>

                            <md-card-header>
                                <div class="md-title">Title goes here</div>
                                <!--<div class="md-subhead">Subtitle here</div>-->
                            </md-card-header>

                            <!--<md-card-actions>-->
                            <!--<md-button>Action</md-button>-->
                            <!--<md-button>Action</md-button>-->
                            <!--</md-card-actions>-->

                            <md-card-content class="wrap_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum
                                odio.
                                Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate
                                pariatur in
                                deleniti minus sint. Excepturi.
                            </md-card-content>
                        </md-card>
                    </md-list-item>
                    <md-list-item>
                        <md-card>
                            <md-card-media class="div_center">

                                <img src="../assets/pork and scallions steamed buns.jpeg" alt="Xiaolong bao">

                            </md-card-media>

                            <md-card-header>
                                <div class="md-title">Title goes here</div>
                                <!--<div class="md-subhead">Subtitle here</div>-->
                            </md-card-header>

                            <!--<md-card-actions>-->
                            <!--<md-button>Action</md-button>-->
                            <!--<md-button>Action</md-button>-->
                            <!--</md-card-actions>-->

                            <md-card-content class="wrap_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum
                                odio.
                                Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate
                                pariatur in
                                deleniti minus sint. Excepturi.
                            </md-card-content>
                        </md-card>
                    </md-list-item>

                </md-list>

                <md-list class="md-double-line">
                    <md-list-item>
                        <md-card>
                            <md-card-media class="div_center">

                                <img src="../assets/pork and scallions steamed buns.jpeg" alt="Xiaolong bao">

                            </md-card-media>

                            <md-card-header>
                                <div class="md-title">Title goes here</div>
                                <!--<div class="md-subhead">Subtitle here</div>-->
                            </md-card-header>

                            <!--<md-card-actions>-->
                            <!--<md-button>Action</md-button>-->
                            <!--<md-button>Action</md-button>-->
                            <!--</md-card-actions>-->

                            <md-card-content class="wrap_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum
                                odio.
                                Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate
                                pariatur in
                                deleniti minus sint. Excepturi.
                            </md-card-content>
                        </md-card>
                    </md-list-item>

                </md-list>
            </md-app-content>
        </md-app>
    </div>

</template>

<script>
  export default {
    name: "menu_page",
    data: () => ({
      menuVisible: false
    }),
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style lang="scss" scoped>

    .wrap_text {
        white-space: normal;
        padding-bottom: 1rem;
    }

    .item-right-style {
        justify-content: flex-start;
    }

    .item-end-style {
        justify-content: flex-end;
    }

    .item-center-style {
        justify-content: center;
    }

    .md-list {
        width: 500px;
        max-width: 100%;
        display: inline-block;
        vertical-align: top;
        border: 1px solid rgba(#000, .12);
    }

    .md-app {
        min-height: 350px;
        border: 1px solid rgba(#000, .12);
    }

    // Demo purposes only
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }

    .div_center {
        display: flex;
        justify-content: center;
    }

    img {
        width: 50%;
        height: 50%;
    }

</style>