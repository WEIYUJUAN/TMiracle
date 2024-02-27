<template>
  <AppProvider>
    <div
      class="header"
      :class="
        activeLinkPath === '/terms' || activeLinkPath === '/privacy'
          ? 'isStick'
          : ''
      "
    >
      <div class="logo" @click="router.push('/home')"></div>
      <div class="nav">
        <button
          :class="[activeLinkPath === '/launchpad' ? 'active' : '']"
          @click="router.push('/launchpad')"
        >
          Launchpad
        </button>
        <button>
          <a
            href="https://qovm57le89b.typeform.com/to/JcOsyfd0"
            target="_blank"
          >
            Apply
          </a>
        </button>
        <button
          :class="[activeLinkPath === '/comingSoon' ? 'active' : '']"
          @click="router.push('/comingSoon')"
        >
          Documentation
        </button>
      </div>
      <div class="menu" @click="drawerVisible = true"></div>
    </div>

    <router-view :key="activeLinkPath"></router-view>
    <div class="footer">
      <div class="arrow">
        <a href="https://t.me/tokenmarvel" target="_blank"></a>
      </div>
      <div class="copyright">
        <div class="logo"></div>
        <div class="thead">TokenMarvel © 2023. All rights reserved.</div>
        <div class="termsAndPrivacy">
          <a @click="onNavJump('terms')"> Terms </a>
          <a @click="onNavJump('privacy')"> Privacy</a>
        </div>
      </div>
      <div class="link">
        <section>
          <!-- <a href="https://twitter.com/thetokenmarvel" target="_blank"></a> -->
          <a href="https://x.com/token_marvel24?t=tuSDxGbRMAtjKD-92FwV4g&s=09" target="_blank"></a>
        </section>
        <section>
          <a href="https://t.me/tokenmarvel" target="_blank"></a>
        </section>
      </div>
    </div>
  </AppProvider>
  <n-drawer v-model:show="drawerVisible" placement="top">
    <n-drawer-content class="draweer_inner">
      <div
        :class="[activeLinkPath === '/launchpad' ? 'active' : '']"
        @click="onNavJump('Launchpad')"
      >
        Launchpad
      </div>
      <div @click="onNavJump('Apply')">Apply</div>
      <div
        :class="[activeLinkPath === '/comingSoon' ? 'active' : '']"
        @click="onNavJump('Documentation')"
      >
        Documentation
      </div>
    </n-drawer-content>
  </n-drawer>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
import AppProvider from "./components/common/AppProvider.vue";
import { ref, computed } from "vue";
let router = useRouter();
let route = useRoute();
let drawerVisible = ref(false);
let isDocument = ref(false);
const activeLinkPath = computed(() => route.path);
const onNavJump = (val) => {
  if (val == "Launchpad") {
    router.push("/launchpad");
  } else if (val === "Apply") {
    window.open("https://qovm57le89b.typeform.com/to/JcOsyfd0", "_blank");
  } else if (val === "terms") {
    router.push("/terms");
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  } else if (val === "privacy") {
    router.push("/privacy");
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  } else {
    router.push("/comingSoon");
  }
  drawerVisible.value = false;
};
</script>
<style lang="scss" scoped>
// 移动端
@media only screen and (max-width: 640px) {
  /* 在这里添加移动端样式 */
  .header {
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;

    .logo {
      width: 118px;
      height: 24px;
      background: url("./assets/images/new\ logo@2x.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
    .nav {
      margin-right: 240px;
      display: none;
      button {
        width: 136px;
        height: 40px;
        border-radius: 12px;
        border: 2px solid rgba(13, 82, 252, 0.4);
        background-color: white;
        font-size: 14px;
        font-family: "HiraKakuProN", "HiraKakuProN";
        font-weight: 600;
        color: rgba(0, 0, 0);
        margin-right: 32px;
        cursor: pointer;

        &:last-child {
          margin-right: 0;
        }
      }
    }
    .menu {
      width: 16px;
      height: 12.5px;
      background: url("./assets/images/mobile_menu@2x.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }

  .footer {
    height: 375px;
    background: #0d52fc;
    position: relative;
    .arrow {
      width: 82px;
      height: 82px;
      background: #0d52fc;
      position: fixed;
      bottom: 100px;
      right: 100px;
      display: none;
      border-radius: 50%;
      background: url("./assets/images/arrow@2x.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      a {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .copyright {
      position: absolute;
      top: 193px;
      left: 15px;
      .logo {
        width: 157px;
        height: 32px;
        background: url("./assets/images/new_logo_small@2x.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .thead {
        height: 20px;
        font-size: 16px;
        font-family: "HiraKakuProN", "HiraKakuProN";
        font-weight: normal;
        color: rgba(255, 255, 255, 0.88);
        line-height: 20px;
        margin-top: 10px;
      }

      .termsAndPrivacy {
        margin-top: 20px;
        text-align: left;
        font-size: 16px;
        font-family: HiraKakuProN, HiraKakuProN;
        font-weight: normal;
        color: #ffffff;
        display: flex;

        a {
          width: auto;
          height: auto;
          display: inline-block;
          margin-right: 32px;
        }
      }
    }
    .link {
      position: absolute;
      top: 50px;
      left: 108px;
      display: flex;
      section {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        cursor: pointer;
        &:nth-child(1) {
          background: url("./assets/images/cancel@2x.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-right: 32px;
          // display: none;
          &:hover {
            background: url("./assets/images/twitter_hover.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
        &:nth-child(2) {
          background: url("./assets/images/arrow_white@2x.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;

          &:hover {
            background: url("./assets/images/arrow_hover.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
        a {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
  .draweer_inner {
    div {
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #eee;
      text-align: center;
      line-height: 60px;
      font-weight: 600;

      &:last-child {
        border-bottom: none;
      }
      &.active {
        color: #0d52fc;
      }
    }
  }
  :deep(.n-drawer) {
    height: 100px !important;
  }
}

@media only screen and (min-width: 640px) {
  /* 在这里添加 PC 端样式 */
  .header {
    height: 72px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 177px;
      height: 36px;
      background: url("./assets/images/logo_hign@2x.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      margin-left: 240px;
    }
    .nav {
      margin-right: 240px;
      button {
        width: 136px;
        height: 40px;
        border-radius: 12px;
        border: 2px solid rgba(13, 82, 252, 0.4);
        background-color: white;
        font-size: 14px;
        font-family: "HiraKakuProN", "HiraKakuProN";
        font-weight: 600;
        color: rgba(0, 0, 0);
        margin-right: 32px;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          background: #3015ff;
          color: #fff;
        }
        &:last-child {
          margin-right: 0;
        }

        &.active {
          border: 2px solid rgba(13, 82, 252, 1);
        }
        &:active,
        focus {
          border: 2px solid rgba(13, 82, 252, 1);
        }
      }
    }
    .menu {
      display: none;
    }
  }
  .isStick {
    position: sticky;
    top: 0;
    left: 0;
    background-color: white !important;
    z-index: 999;
  }

  .footer {
    height: 420px;
    background: #0d52fc;
    position: relative;
    .arrow {
      width: 82px;
      height: 82px;
      background: #0d52fc;
      position: fixed;
      bottom: 100px;
      right: 100px;
      border-radius: 50%;
      background: url("./assets/images/arrow@2x.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      a {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .copyright {
      position: absolute;
      top: 135px;
      left: 240px;
      .logo {
        width: 157px;
        height: 32px;
        background: url("./assets/images/new_logo_small@2x.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .thead {
        height: 20px;
        font-size: 16px;
        font-family: "HiraKakuProN", "HiraKakuProN";
        font-weight: normal;
        color: rgba(255, 255, 255, 0.88);
        line-height: 20px;
        margin-top: 10px;
      }

      .termsAndPrivacy {
        margin-top: 32px;
        text-align: left;
        font-size: 16px;
        font-family: HiraKakuProN, HiraKakuProN;
        font-weight: normal;
        color: #ffffff;
        display: flex;

        a {
          width: auto;
          height: auto;
          display: inline-block;
          margin-right: 32px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .link {
      position: absolute;
      top: 98px;
      right: 240px;
      display: flex;
      section {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:nth-child(1) {
          background: url("./assets/images/cancel@2x.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-right: 48px;
          // display: none;

          &:hover {
            background: url("./assets/images/twitter_hover.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
        &:nth-child(2) {
          background: url("./assets/images/arrow_white@2x.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-right: 48px;

          &:hover {
            background: url("./assets/images/arrow_hover.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
        a {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
}
</style>
