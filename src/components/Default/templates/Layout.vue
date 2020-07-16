<template>
    <!--========================================================
                            FOOTER 
    =========================================================-->

<footer id="footer">
    <div class="container">
        <div class="row">
            <div class="grid_12">
                <a class="logo1" href="/"><img src="@/assets/images/mhl_logo.png" alt=""></a>
                <div class="copy">
                    <span>&nbsp;&copy;</span>
                    <span id="copyright-year"></span>
                    <span>|</span>
                    <span><a href="/">Privacy Policy</a></span> <!--{%FOOTER_LINK} -->
                </div>
            </div>       
        </div>
    </div>  
</footer>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
    name: "Footer",
    components: {},
})
</script>