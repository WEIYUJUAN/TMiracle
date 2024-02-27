<template>
  <div class="launchpad_box">
    <div class="header">
      <n-tabs type="line" animated v-model:value="checkedTabValue">
        <n-tab-pane name="active" disabled>
          <template #tab>
            <div class="tab_item">
              <div>
                <div class="active" v-if="checkedTabValue == 'active'"></div>
                <div class="no_active" v-else></div>
              </div>
              <p class="this.$listeners">ACTIVE</p>
            </div>
          </template>
          <n-grid x-gap="12" :cols="4" class="grid">
            <n-gi
              class="gi"
              @click="router.push('/launchpad/details?title=HYME')"
            >
              <div class="production">
                <nav><div class="hyme"></div></nav>
                <button class="hint">WHITELIST OPEN</button>
                <div class="production_decript">
                  <div class="name">
                    <p>HYME</p>
                    <div class="icon"></div>
                  </div>
                  <div class="identifying">
                    <section>
                      <button>FCFS</button>
                      <button>
                        <nav></nav>
                        <p>BSC</p>
                      </button>
                    </section>
                    <section>
                      <div class="icon">
                        <a href="#" @click.stop="onJump"></a>
                      </div>
                      <div class="icon">
                        <a href="#" @click.stop="onJump"></a>
                      </div>
                      <div class="icon"></div>
                      <div class="icon"></div>
                    </section>
                  </div>
                  <div class="time">Start at Nov 24,2023 13:00 UTC</div>
                  <div class="raise">
                    <p>Total Raise</p>
                    <p>30000 TON</p>
                  </div>
                  <div class="supply">
                    <p>Supply</p>
                    <p>2500000 HYME</p>
                  </div>
                  <div class="rate">
                    <p>Rate</p>
                    <p>1 HYME = 0.012 TON</p>
                  </div>
                  <div class="deposit">
                    <p>Deposit</p>
                    <p>TON</p>
                  </div>
                </div>
              </div>
            </n-gi>
            <n-gi
              class="gi"
              @click="router.push('/launchpad/details?title=EDirve')"
            >
              <div class="production">
                <nav><div class="edirve"></div></nav>
                <button class="hint">WHITELIST OPEN</button>
                <div class="production_decript">
                  <div class="name">
                    <p>EDrive</p>
                    <div class="icon"></div>
                  </div>
                  <div class="identifying">
                    <section>
                      <button>FCFS</button>
                      <button>
                        <nav></nav>
                        <p>BSC</p>
                      </button>
                    </section>
                    <section>
                      <div class="icon">
                        <a href="#" @click.stop="onJump"></a>
                      </div>
                      <div class="icon">
                        <a href="#" @click.stop="onJump"></a>
                      </div>
                      <div class="icon"></div>
                      <div class="icon"></div>
                    </section>
                  </div>
                  <div class="time">Start at Nov 24,2023 13:00 UTC</div>
                  <div class="raise">
                    <p>Total Raise</p>
                    <p>30000 TON</p>
                  </div>
                  <div class="supply">
                    <p>Supply</p>
                    <p>2500000 HYME</p>
                  </div>
                  <div class="rate">
                    <p>Rate</p>
                    <p>1 HYME = 0.012 TON</p>
                  </div>
                  <div class="deposit">
                    <p>Deposit</p>
                    <p>TON</p>
                  </div>
                </div>
              </div>
            </n-gi>
          </n-grid>
        </n-tab-pane>
        <n-tab-pane name="upcoming">
          <template #tab>
            <div class="tab_item">
              <div>
                <div class="active" v-if="checkedTabValue == 'upcoming'"></div>
                <div class="no_active" v-else></div>
              </div>
              <p class="this.$listeners">UPCOMING [1]</p>
            </div>
          </template>
          <n-input
            round
            placeholder="search"
            v-model:value="searchValue"
            class="mobile_search"
          >
            <template #suffix>
              <div class="suffix_img"></div>
            </template>
          </n-input>
          <n-grid x-gap="12" :cols="4" class="grid">
            <n-gi
              class="gi"
              @click="router.push('/launchpad/details?title=XXXX')"
            >
              <div class="production">
                <nav><div class="xxx"></div></nav>
                <button class="hint">UPCOMING</button>
                <div class="production_decript">
                  <div class="name">
                    <p>XXXX</p>
                    <div class="icon"></div>
                  </div>
                  <div class="identifying">
                    <section>
                      <button>FCFS</button>
                      <button>
                        <nav></nav>
                        <p>TON</p>
                      </button>
                    </section>
                    <section>
                      <div class="icon">
                        <a href="#" @click.stop="onJump"></a>
                      </div>
                      <div class="icon">
                        <TONa href="#" @click.stop="onJump"></TONa>
                      </div>
                      <div class="icon"></div>
                      <div class="icon"></div>
                    </section>
                  </div>
                  <div class="time">Start at Dec 24,2023 13:00 UTC</div>
                  <div class="raise">
                    <p>Total Raise</p>
                    <p>30000 TON</p>
                  </div>
                  <div class="supply">
                    <p>Supply</p>
                    <p>2500000 X</p>
                  </div>
                  <div class="rate">
                    <p>Rate</p>
                    <p>1 X = 0.012 TON</p>
                  </div>
                  <div class="deposit">
                    <p>Deposit</p>
                    <p>TON</p>
                  </div>
                </div>
              </div>
            </n-gi>
          </n-grid>
        </n-tab-pane>
        <n-tab-pane name="completed" disabled>
          <template #tab>
            <div class="tab_item">
              <div>
                <div class="active" v-if="checkedTabValue == 'completed'"></div>
                <div class="no_active" v-else></div>
              </div>
              <p class="this.$listeners">COMPLETED</p>
            </div>
          </template>
          <n-grid x-gap="12" :cols="4" class="grid">
            <n-gi
              class="gi"
              @click="router.push('/launchpad/details?title=HYME')"
            >
              <div class="production">
                <nav><div class="hyme"></div></nav>
                <button class="hint">WHITELIST COMPLETED</button>

                <div class="production_decript">
                  <div class="name">
                    <p>HYME</p>
                    <div class="icon"></div>
                  </div>
                  <div class="identifying">
                    <section>
                      <button>FCFS</button>
                      <button>
                        <nav></nav>
                        <p>BSC</p>
                      </button>
                    </section>
                    <section>
                      <div class="icon">
                        <a href="#" @click.stop="onJump"></a>
                      </div>
                      <div class="icon">
                        <a href="#" @click.stop="onJump"></a>
                      </div>
                      <div class="icon"></div>
                      <div class="icon"></div>
                    </section>
                  </div>
                  <div class="time">Start at Nov 24,2023 13:00 UTC</div>
                  <div class="raise">
                    <p>Total Raise</p>
                    <p>30000 TON</p>
                  </div>
                  <div class="supply">
                    <p>Supply</p>
                    <p>2500000 HYME</p>
                  </div>
                  <div class="rate">
                    <p>Rate</p>
                    <p>1 HYME = 0.012 TON</p>
                  </div>
                  <div class="deposit">
                    <p>Deposit</p>
                    <p>TON</p>
                  </div>
                </div>
              </div>
            </n-gi>
          </n-grid>
        </n-tab-pane>
        <template #suffix>
          <n-input
            round
            placeholder="search"
            v-model:value="searchValue"
            class="pc_search"
          >
            <template #suffix>
              <div class="suffix_img"></div>
            </template>
          </n-input>
        </template>
      </n-tabs>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
let checkedTabValue = ref("upcoming");
let searchValue = ref("");
const onJump = () => {
  window.open("https://t.me/tokenmarvel");
};
</script>
<style lang="scss" scoped>
@media only screen and (max-width: 640px) {
  /* 在这里添加移动端样式 */
  .launchpad_box {
    .header {
      margin-top: 26px;
      .tab_item {
        height: 24px;
        display: flex;
        align-items: center;
        margin-left: 15px;
        .active {
          width: 24px;
          height: 24px;
          background: url("../../assets/images/logo_small_blue@2x.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        .no_active {
          width: 24px;
          height: 24px;
          background: url("../../assets/images/logo_samll_gray@2x.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        p {
          font-size: 20px;
          font-family: "HiraKakuProN", "HiraKakuProN";
          font-weight: normal;
          line-height: 24px;
          margin-left: 3px;
          font-weight: 600;
        }
      }
      .pc_search {
        display: none;
        .suffix_img {
          width: 24px;
          height: 24px;
          background: url("../../assets/images/search@2x.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
      .mobile_search {
        .suffix_img {
          width: 24px;
          height: 24px;
          background: #000000;
          background: url("../../assets/images/search@2x.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }

      .grid {
        margin-top: 40px;
        .gi {
          cursor: pointer;

          &:last-child {
            margin-bottom: 55px;
          }
          &:hover {
            .hyme,
            .edirve,
            .xxx {
              transform: scale(1.2);
            }
          }
          .production {
            width: 342px;
            height: 458px;
            background: #f5f8ff;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
            overflow: hidden;
            position: relative;
            margin-left: 16px;
            nav {
              height: 184px;
              overflow: hidden;
              .hyme {
                height: 184px;
                border-radius: 20px 20px 0px 0px;
                background: url("../../assets/images/card_small@2x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                transition: all 0.5s linear;
              }
              .xxx {
                height: 184px;
                border-radius: 20px 20px 0px 0px;
                background: url("../../assets/images/x_small@2x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                transition: all 0.5s linear;
              }
              .edirve {
                height: 184px;
                border-radius: 20px 20px 0px 0px;
                background: url("../../assets/images/edrive_small@2x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                transition: all 0.5s linear;
              }
            }
            .hint {
              padding: 0 18px;
              height: 30px;
              background: linear-gradient(124deg, #5e2fff 0%, #3015ff 100%);
              border-radius: 8px;
              position: absolute;
              top: 16px;
              right: 16px;
              border: none;
              font-size: 14px;
              font-family: "HiraKakuProN";
              font-weight: 600;
              color: #ffffff;
              line-height: 21px;
            }
            &_decript {
              flex: 1;
              background: rgba(245, 248, 255, 1);
              border-radius: 0 0 20px 20px;
              padding: 24px 20px 32px;
              .name {
                display: flex;
                align-items: center;
                p {
                  font-size: 24px;
                  font-family: "HiraKakuProN", "HiraKakuProN";
                  font-weight: normal;
                  color: #000000;
                  line-height: 24px;
                  margin-right: 9px;
                }
                .icon {
                  width: 19px;
                  height: 18px;
                  background: url("../../assets/images/add_blue\ @2x.png");
                  background-repeat: no-repeat;
                  background-size: 100% 100%;
                }
              }
              .identifying {
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                section {
                  display: flex;
                  button {
                    width: 60px;
                    height: 22px;
                    background: #cedcfe;
                    border-radius: 11px;
                    border: 1px solid rgba(13, 82, 252, 0.4);
                    font-size: 12px;
                    font-family: "HiraKakuProN";
                    font-weight: normal;
                    color: #000000;
                    margin-right: 8px;
                    cursor: pointer;
                    &:last-child {
                      margin-right: 0;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      nav {
                        width: 16px;
                        height: 16px;
                        background: url("../../assets/images/new_bfs@2x.png");
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        margin-right: 5px;
                      }
                      p {
                        font-size: 12px;
                        font-family: "HiraKakuProN";
                        font-weight: normal;
                        color: #000000;
                      }
                    }
                  }
                  .icon {
                    width: 20px;
                    height: 20px;
                    margin-right: 8px;
                    border-radius: 50%;
                    cursor: pointer;
                    &:nth-child(1) {
                      background: url("../../assets/images/cancel_small_black@2x.png");
                      background-repeat: no-repeat;
                      background-size: 100% 100%;
                    }
                    &:nth-child(2) {
                      background: url("../../assets/images/arrow_small_black@2x.png");
                      background-repeat: no-repeat;
                      background-size: 100% 100%;
                    }
                    &:nth-child(3) {
                      background: url("../../assets/images/bot_black@2x.png");
                      background-repeat: no-repeat;
                      background-size: 100% 100%;
                    }

                    &:last-child {
                      margin-right: 0;
                      background: url("../../assets/images/link_black@2x.png");
                      background-repeat: no-repeat;
                      background-size: 100% 100%;
                    }
                  }
                }
              }
              .time {
                margin-top: 23px;
                height: 14px;
                font-size: 14px;
                font-family: "HiraKakuProN";
                font-weight: 600;
                color: #3015ff;
                line-height: 21px;
                margin-bottom: 5px;
              }
              .raise,
              .supply,
              .rate,
              .deposit {
                display: flex;
                justify-content: space-between;
                height: 14px;
                margin-top: 16px;
                p {
                  &:nth-child(1) {
                    font-size: 14px;
                    font-family: "HiraKakuProN";
                    font-weight: normal;
                    color: RGBA(145, 147, 151, 1);
                    line-height: 21px;
                  }
                  &:nth-child(2) {
                    font-size: 14px;
                    font-family: "HiraKakuProN";
                    font-weight: normal;
                    color: #000000;
                    line-height: 21px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  :deep(.n-input) {
    width: 324px;
    height: 44px;
    background: #f5f8ff;
    border-radius: 8px;
    border: none !important;
    margin-left: 15px;
  }
  :deep(.n-tabs-tab-wrapper) {
    margin-right: 24px;
    align-items: center;
  }
  :deep(
      .n-tabs.n-tabs--top
        .n-tabs-nav-scroll-wrapper.n-tabs-nav-scroll-wrapper--shadow-end::after,
      .n-tabs.n-tabs--bottom
        .n-tabs-nav-scroll-wrapper.n-tabs-nav-scroll-wrapper--shadow-end::after
    ) {
    box-shadow: none;
  }
}
@media only screen and (min-width: 640px) {
  /* 在这里添加移动端样式 */
  .launchpad_box {
    padding: 0 240px;
    .header {
      margin-top: 83px;
      .tab_item {
        height: 27px;
        display: flex;
        align-items: center;

        .active {
          width: 24px;
          height: 24px;
          background: url("../../assets/images/logo_small_blue@2x.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        .no_active {
          width: 24px;
          height: 24px;
          background: url("../../assets/images/logo_samll_gray@2x.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        p {
          font-size: 24px;
          font-family: "HiraKakuProN", "HiraKakuProN";
          font-weight: normal;
          line-height: 24px;
          margin-left: 3px;
        }
      }
      .suffix_img {
        width: 24px;
        height: 24px;
        background: #000000;
        background: url("../../assets/images/search@2x.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .grid {
        margin-top: 40px;
        .gi {
          cursor: pointer;

          &:last-child {
            margin-bottom: 55px;
          }
          &:hover {
            .hyme,
            .edirve,
            .xxx {
              transform: scale(1.2);
            }
          }
          .production {
            width: 342px;
            height: 458px;
            background: #f5f8ff;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
            overflow: hidden;
            position: relative;
            nav {
              height: 184px;
              overflow: hidden;
              .hyme {
                height: 184px;
                border-radius: 20px 20px 0px 0px;
                background: url("../../assets/images/card_small@2x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                transition: all 0.5s linear;
              }
              .xxx {
                height: 184px;
                border-radius: 20px 20px 0px 0px;
                background: url("../../assets/images/x_small@2x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                transition: all 0.5s linear;
              }
              .edirve {
                height: 184px;
                border-radius: 20px 20px 0px 0px;
                background: url("../../assets/images/edrive_small@2x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                transition: all 0.5s linear;
              }
            }
            .hint {
              padding: 0 18px;
              height: 30px;
              background: linear-gradient(124deg, #5e2fff 0%, #3015ff 100%);
              border-radius: 8px;
              position: absolute;
              top: 16px;
              right: 16px;
              border: none;
              font-size: 14px;
              font-family: "HiraKakuProN";
              font-weight: 600;
              color: #ffffff;
              line-height: 21px;
            }
            &_decript {
              flex: 1;
              background: rgba(245, 248, 255, 1);
              border-radius: 0 0 20px 20px;
              padding: 24px 20px 32px;
              .name {
                display: flex;
                align-items: center;
                p {
                  font-size: 24px;
                  font-family: "HiraKakuProN", "HiraKakuProN";
                  font-weight: normal;
                  color: #000000;
                  line-height: 24px;
                  margin-right: 9px;
                }
                .icon {
                  width: 19px;
                  height: 18px;
                  background: url("../../assets/images/add_blue\ @2x.png");
                  background-repeat: no-repeat;
                  background-size: 100% 100%;
                }
              }
              .identifying {
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                section {
                  display: flex;
                  button {
                    width: 60px;
                    height: 22px;
                    background: #cedcfe;
                    border-radius: 11px;
                    border: 1px solid rgba(13, 82, 252, 0.4);
                    font-size: 12px;
                    font-family: "HiraKakuProN";
                    font-weight: normal;
                    color: #000000;
                    margin-right: 8px;
                    cursor: pointer;
                    &:last-child {
                      margin-right: 0;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      nav {
                        width: 16px;
                        height: 16px;
                        background: url("../../assets/images/new_bfs@2x.png");
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        margin-right: 5px;
                      }
                      p {
                        font-size: 12px;
                        font-family: "HiraKakuProN";
                        font-weight: normal;
                        color: #000000;
                      }
                    }
                  }
                  .icon {
                    width: 20px;
                    height: 20px;
                    margin-right: 8px;
                    border-radius: 50%;
                    cursor: pointer;
                    &:nth-child(1) {
                      background: url("../../assets/images/cancel_small_black@2x.png");
                      background-repeat: no-repeat;
                      background-size: 100% 100%;
                    }
                    &:nth-child(2) {
                      background: url("../../assets/images/arrow_small_black@2x.png");
                      background-repeat: no-repeat;
                      background-size: 100% 100%;
                    }
                    &:nth-child(3) {
                      background: url("../../assets/images/bot_black@2x.png");
                      background-repeat: no-repeat;
                      background-size: 100% 100%;
                    }

                    &:last-child {
                      margin-right: 0;
                      background: url("../../assets/images/link_black@2x.png");
                      background-repeat: no-repeat;
                      background-size: 100% 100%;
                    }
                  }
                }
              }
              .time {
                margin-top: 23px;
                height: 14px;
                font-size: 14px;
                font-family: "HiraKakuProN";
                font-weight: 600;
                color: #3015ff;
                line-height: 21px;
                margin-bottom: 5px;
              }
              .raise,
              .supply,
              .rate,
              .deposit {
                display: flex;
                justify-content: space-between;
                height: 14px;
                margin-top: 16px;
                p {
                  &:nth-child(1) {
                    font-size: 14px;
                    font-family: "HiraKakuProN";
                    font-weight: normal;
                    color: RGBA(145, 147, 151, 1);
                    line-height: 21px;
                  }
                  &:nth-child(2) {
                    font-size: 14px;
                    font-family: "HiraKakuProN";
                    font-weight: normal;
                    color: #000000;
                    line-height: 21px;
                  }
                }
              }
            }
          }
        }
      }
      .mobile_search {
        display: none;
      }
    }
  }

  :deep(.n-input) {
    width: 324px;
    height: 56px;
    background: #f5f8ff;
    border-radius: 15px;
    border: none !important;
  }
  :deep(.n-tabs-tab-wrapper) {
    margin-right: 64px;
    align-items: center;
  }
}

:deep(.n-tabs-bar) {
  display: none;
}

:deep(.n-tabs-nav-scroll-content) {
  border-bottom: none !important;
}
:deep(.n-tabs-nav__suffix) {
  border-bottom: none !important;
}

:deep(.n-input .n-input__input-el) {
  height: 100%;
}
:deep(.n-tabs .n-tabs-tab-pad) {
  display: none !important;
}
</style>
