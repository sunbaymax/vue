<template>
  <div class="mune">
    <div v-if="kk==1">
      <!-- 11111111111 -->
      <div>
         <GoodList :goodId='1'></GoodList>
      </div>
    </div>
    <div v-else-if="kk==2"><GoodList :goodId='2'></GoodList></div>
    <div v-else-if="kk==3"><GoodList :goodId='3'></GoodList></div>
    <div v-else-if="kk==4"><GoodList></GoodList></div>
    <div v-else><GoodList></GoodList></div>
  </div>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
<script>
import Msg from "./jiaohu.js"

import GoodList from './GoodList'
export default {
  data() {
    return {
      kk: "",
      list: []
    };
  },
   components:{

       
        GoodList

        }, 
  mounted: function() {
    var _this = this;
    Msg.$on("val", function(e) {

      _this.kk = e;
    });
  }
};
</script>