<template>
  <div v-if="showUiKit" class="app-container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { initIMUIKit } from "./components/NEUIKit/utils/init";

export default {
  name: "App",
  methods: {
    initIMUiKit(opts: { appkey: string; account: string; token: string }) {
      const { nim } = initIMUIKit(opts.appkey);

      nim.V2NIMLoginService.login(opts.account, opts.token).then(() => {
        // IM 登录成功后跳转到会话页面
        this.showUiKit = true;
        this.$router.push("/chat");
      });
    },
  },
  data() {
    return {
      showUiKit: false,
    };
  },
  mounted() {
    this.initIMUiKit({
      appkey: "3e215d27b6a6a9e27dad7ef36dd5b65c", //您在云信控制台注册的appkey
      account: "53054", //云信控制台上的account
      token: "4d76e8c3-490b-4377-904e-ae10d2617211",
    });
  },
};
</script>

<style>
.app-container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-image: url("./assets/bg.png");
}
</style>
