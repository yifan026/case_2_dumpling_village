<template>
    <div>

        <div class="bottom_border"></div>

            <div >
                <p class="text-center">Copyright @2021 | Designed With by <a href="#">YFC</a></p>
            </div>


            <md-button class="md-fab md-primary" href="https://www.facebook.com/DumplingVillage">

                <md-icon> facebook</md-icon>

            </md-button>
            <md-button class="md-fab md-primary"
                       href="https://www.google.com/maps/place/Dumpling+Village,+7203+Haven+Ave+c,+Rancho+Cucamonga,+CA+91701%E7%BE%8E%E5%9C%8B/@34.1235508,-117.5769406,17z/data=!4m2!3m1!1s0x80c337a490c59feb:0x274385a02ba260c3">
                <md-avatar>
                    <img src="https://maps.gstatic.com/mapfiles/maps_lite/pwa/icons/2x/maps15_bnuw3a_96dp.png"
                         alt="google">
                </md-avatar>
            </md-button>
            <md-button class="md-fab md-primary"
                       href="https://www.clover.com/online-ordering/dumpling-village-rancho-cucamonga">

                <md-avatar>
                    <img src="https://checkout.clover.com/assets/icons/clover-symbol.png"
                         alt="clover">
                </md-avatar>

            </md-button>
            <md-button class="md-fab md-primary" href="https://www.yelp.com/biz/dumpling-village-rancho-cucamonga">

                <md-avatar>
                    <img src="https://s3-media0.fl.yelpcdn.com/assets/public/burst_desktop_xsmall_outline@2x.yji-dcb526e86d86cc0427ef2e8287d0aa17.png"
                         alt="yelp">
                </md-avatar>

            </md-button>

        </div>



</template>

<script>
  export default {
    name: "footer"
  }
</script>

<style scoped>


    .bottom_border {
        border-bottom: 1px solid #323f45;
        padding-bottom: 10px;
    }

    .foote_bottom_ul_amrc {
        list-style-type: none;
        padding: 0px;
        display: table;
        margin-top: 10px;
        margin-right: auto;
        margin-bottom: 10px;
        margin-left: auto;
    }

    .foote_bottom_ul_amrc li {
        display: inline;
    }

    .foote_bottom_ul_amrc li a {
        color: #999;
        margin: 0 12px;
    }

</style>