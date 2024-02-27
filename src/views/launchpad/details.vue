<template>
  <div class="details_box">
    <div class="production_describe">
      <section>
        <div class="details">
          <div v-if="title === 'XXXX'" class="xxx"></div>
          <div v-if="title === 'EDirve'" class="img"></div>
          <div v-if="title === 'HYME'" class="hyme"></div>
          <div class="details_descript">
            <div class="name">{{ title }}</div>
            <div class="button_icon">
              <button>FCFS</button>
              <button>
                <div></div>
                <p>TON</p>
              </button>
              <div class="icon">
                <a href="https://t.me/tokenmarvel" target="_blank"></a>
              </div>
              <div class="icon">
                <a href="https://t.me/tokenmarvel" target="_blank"></a>
              </div>
              <div class="icon"></div>
              <div class="icon"></div>
            </div>
          </div>
        </div>
        <div class="text">
          Welcome to XXXX, the revolutionary infra focused on delivering the
          best of Artificial Intelligence projects in Crypto!
        </div>
      </section>
      <section>
        <button>
          <a href="https://t.me/tokenmarvel" target="_blank">Start</a>
        </button>
        <div class="text">
          <p>Progress</p>
          <p>70038.0032/100000 TON</p>
        </div>
        <n-progress
          type="line"
          :percentage="70.04"
          :indicator-placement="'inside'"
          color="linear-gradient(90deg, #1E8AFE 0%, #0D52FC 100%)"
          rail-color="#D1E6FF"
          :height="25"
          class="progress"
        />
      </section>
    </div>
    <div class="content">
      <div v-if="title === 'XXXX'" class="xxx"></div>
      <div v-if="title === 'EDirve'" class="picture"></div>
      <div v-if="title === 'HYME'" class="hyme"></div>
      <div class="introduce">
        <div class="title">Details</div>
        <div class="subheading">Project Details</div>
        <section class="details">
          <p>Opens</p>
          <p>2023-12-24 13:00:00 UTC</p>
        </section>
        <section class="details">
          <p>FCFS Opens</p>
          <p>2023-12-24 13:00:00 UTC</p>
        </section>
        <section class="details">
          <p>Closes</p>
          <p>2023-12-27 13:00:00 UTC</p>
        </section>
        <section class="details">
          <p>Rate</p>
          <p>1 X = 0.012 TON</p>
        </section>
        <section class="details">
          <p>Cap</p>
          <p>30000 TON</p>
        </section>
        <section class="details">
          <p>Total Users Participate</p>
          <p>2695</p>
        </section>
        <section class="details">
          <p>Total USDT Deposite</p>
          <p>30000 TON</p>
        </section>
        <section class="details">
          <p>Vesting Period</p>
          <p>
            <n-popover
              trigger="hover"
              :show-arrow="false"
              placement="bottom"
              style="background-color: #cbdafe; font-size: 12px"
            >
              <template #trigger>
                <span class="thead"></span>
              </template>
              <div class="popover" style="width: 230px">
                25% TGE, then linear monthly vesting 3 months
              </div>
            </n-popover>
            <span>25% TGE</span>
          </p>
        </section>
        <div class="line"></div>
        <div class="subheading">Token Details</div>
        <section class="details">
          <p>Token</p>
          <p>X</p>
        </section>
        <section class="details">
          <p>Network</p>
          <p>TON</p>
        </section>
        <section class="details">
          <p>Supply</p>
          <p>2500000</p>
        </section>
        <section class="details">
          <p>Total Supply</p>
          <p>200000000</p>
        </section>
      </div>
    </div>
    <div class="schedule_Allocation">
      <n-tabs type="line" animated :bar-width="0">
        <n-tab-pane name="schedule" tab="">
          <template #tab>
            <p class="tab">Schedule</p>
          </template>
          <n-data-table
            :columns="scheduleColumns"
            :data="scheduleData"
            :bordered="false"
            class="dataTable"
            :row-props="rowProps"
            size="small"
            scrollX="600"
          />
        </n-tab-pane>
        <n-tab-pane name="allocation" tab="Allocation">
          <template #tab>
            <p class="tab" style="">Allocation</p>
          </template>
          <div class="allocation">
            <n-data-table
              :columns="allocationeColumns"
              :data="allocationeData"
              :bordered="false"
              class="allocation_dataTable"
              size="small"
              scrollX="600"
            />
            <button>
              <a href="https://t.me/tokenmarvel" target="_blank">Start</a>
            </button>
          </div>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script lang="jsx" setup>
import { useRoute } from "vue-router";
let {
  query: { title },
} = useRoute();
const rowProps = () => {
  return {
    className: "tableItem",
  };
};

const scheduleColumns = [
  {
    title: "Round",
    key: "round",
    align: "center",
    className: "tableTitle",
  },
  {
    title: "Opens",
    key: "opens",
    align: "center",
    className: "tableTitle",
  },
  {
    title: "Closes",
    key: "closes",
    align: "center",
    className: "tableTitle",
  },
];

const scheduleData = [
  {
    round: "Allocation",
    opens: "2023-12-24 13:00:00 UTC",
    closes: "2023-12-27 13:00:00 UTC",
  },
  {
    round: "FCFS - Prepare",
    opens: "2023-12-24 13:00:00 UTC",
    closes: "2023-12-27 13:00:00 UTC",
  },
  {
    round: "FCFS - Start",
    opens: "2023-12-24 13:00:00 UTC",
    closes: "2023-12-27 13:00:00 UTC",
  },
];

const allocationeColumns = [
  {
    title: "No.",
    key: "no",
    align: "center",
  },
  {
    title: "Allocation",
    key: "allocation",
    align: "center",
  },
  {
    title: "Date",
    key: "date",
    align: "center",
  },
  {
    title: "Claimed",
    key: "claimed",
  },
  {
    title: "Action",
    key: "date",
  },
];
const allocationeData = [];
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 640px) {
  .details_box {
    overflow: auto;
    margin-top: 36px;
    .production_describe {
      section {
        &:nth-child(1) {
          width: 100%;

          height: 162px;
          margin-right: 24px;
          .details {
            display: flex;
            margin-left: 15px;
            .img {
              width: 84px;
              height: 84px;
              border-radius: 50%;
              margin-right: 24px;
              background: url("../../assets/images/avator@2x.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
            .hyme {
              width: 84px;
              height: 84px;
              border-radius: 50%;
              margin-right: 24px;
              background: url("../../assets/images/hyme_avat@2x.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
            .xxx {
              width: 84px;
              height: 84px;
              border-radius: 50%;
              margin-right: 24px;
              background: url("../../assets/images/x_avator.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
            .details_descript {
              .name {
                width: 85px;
                height: 24px;
                font-size: 24px;
                font-family: "HiraKakuProN";
                font-weight: 600;
                color: #000000;
                line-height: 24px;
                margin-top: 16px;
              }
              .button_icon {
                margin-top: 12px;
                display: flex;
                button {
                  width: 60px;
                  height: 22px;
                  background: #f5f8ff;
                  border-radius: 11px;
                  border: none;
                  font-size: 12px;
                  font-family: "HiraKakuProN";
                  font-weight: normal;
                  color: #000000;
                  margin-right: 9px;
                  &:nth-child(2) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    div {
                      width: 16px;
                      height: 16px;
                      margin-right: 5px;
                      background: url("../../assets/images/new_bfs@2x.png");
                      background-repeat: no-repeat;
                      background-size: 100% 100%;
                    }
                  }
                }
                .icon {
                  width: 20px;
                  height: 20px;
                  background: #3015ff;
                  margin-right: 8px;
                  border-radius: 50%;
                  cursor: pointer;
                  &:nth-child(3) {
                    background: url("../../assets/images/cancel_small_blue@2x.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                  &:nth-child(4) {
                    background: url("../../assets/images/arrow_small_blue@2x.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                  &:nth-child(5) {
                    background: url("../../assets/images/bot_blue@2x.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                  &:nth-child(6) {
                    margin-right: 0;
                    background: url("../../assets/images/link_blue@2x.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
              }
            }
          }

          .text {
            width: 342px;
            height: 60px;
            font-size: 14px;
            padding: 0 15px;
            text-align: justify;
            font-family: "HiraKakuProN";
            font-weight: normal;
            color: rgba(0, 0, 0, 0.88);
            line-height: 32px;
            margin-top: 14px;
          }
        }
        &:nth-child(2) {
          padding: 0 15px;
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          button {
            width: 214px;
            height: 40px;
            background: #0d52fc;
            border-radius: 10px;
            border: none;
            font-size: 16px;
            font-family: "HiraKakuProN";
            font-weight: normal;
            color: #ffffff;
            line-height: 24px;
            margin-top: 40px;
          }
          .text {
            width: 100%;
            display: flex;
            justify-content: space-between;
            line-height: 24px;
            font-family: "HiraKakuProN";
            font-weight: normal;
            margin-top: 18px;
            font-size: 16px;
            p {
              &:nth-child(1) {
                color: rgba(153, 153, 153, 1);
              }
              &:nth-child(2) {
                color: #000000;
              }
            }
          }
          .progress {
            margin-top: 12px;
          }
        }
      }
    }
    .content {
      margin: 15px;
      .picture {
        width: 343px;
        height: 185px;
        border-radius: 20px;
        background: url("../../assets/images/card_big@2x.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .hyme {
        width: 343px;
        height: 185px;
        border-radius: 20px;
        background: url("../../assets/images/hym_big@2x.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .xxx {
        width: 343px;
        height: 185px;
        border-radius: 20px;
        background: url("../../assets/images/x_big@2x.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .introduce {
        width: 343px;
        height: 562px;
        background: #f5f8ff;
        border-radius: 20px;
        padding: 24px 20px 54px;
        box-sizing: border-box;
        overflow-y: auto;
        overflow-x: hidden;
        margin-top: 15px;
        &::-webkit-scrollbar {
          width: 0;
        }
        .title {
          font-size: 20px;
          font-family: "HiraKakuProN";
          font-weight: 600;
          color: #000000;
          line-height: 24px;
        }
        .subheading {
          font-size: 14px;
          font-family: "HiraKakuProN";
          font-weight: 600;
          color: #0d52fc;
          line-height: 21px;
          margin-top: 24px;
        }
        .details {
          display: flex;
          justify-content: space-between;
          margin-top: 16px;
          p {
            &:nth-child(1) {
              font-size: 14px;
              font-family: "HiraKakuProN";
              font-weight: normal;
              color: #939599;
              line-height: 21px;
            }
            &:nth-child(2) {
              font-size: 14px;
              font-family: "HiraKakuProN";
              font-weight: normal;
              color: #000000;
              line-height: 21px;
              display: flex;
              align-items: center;
              .thead {
                width: 12px;
                height: 12px;
                background: url("../../assets/images/new_error@2x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                margin-right: 8px;
                cursor: pointer;
              }
              .popover {
                font-size: 14px !important;
                font-family: "HiraKakuProN";
                font-weight: normal;
                color: #000000;
                line-height: 21px;
              }
            }
          }
        }
        .line {
          width: 333px;
          border: 1px solid #e5e5e5;
          margin-top: 24px;
        }
      }
    }
    .schedule_Allocation {
      margin-top: 25px;
      .tab {
        font-size: 20px;
        font-family: "HiraKakuProN";
        font-weight: 600;
        line-height: 24px;
        margin-left: 18px;
      }
      .dataTable {
        margin-bottom: 56px;
        padding: 15px;
        box-sizing: border-box;
      }
      .allocation {
        margin-bottom: 56px;
        position: relative;
        .allocation_dataTable {
          flex: 1;
          height: 100px;
          padding: 15px;
          box-sizing: border-box;
        }
        button {
          width: 214px;
          height: 40px;
          background: #0d52fc;
          border-radius: 10px;
          font-size: 16px;
          font-family: "HiraKakuProN";
          font-weight: normal;
          color: #ffffff;
          line-height: 24px;
          border: none;
          margin-left: 13px;
          cursor: pointer;
          z-index: 9999;
          position: absolute;
          top: 103px;
          left: 13px;
        }
      }
    }
  }
}
@media only screen and (min-width: 640px) {
  .details_box {
    padding: 109px 240px 0;
    overflow: auto;
    .production_describe {
      display: flex;
      justify-content: space-between;
      section {
        &:nth-child(1) {
          width: 565px;
          height: 162px;
          margin-right: 66px;
          .details {
            display: flex;
            .img {
              width: 84px;
              height: 84px;
              border-radius: 50%;
              margin-right: 24px;
              background: url("../../assets/images/avator@2x.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
            .hyme {
              width: 84px;
              height: 84px;
              border-radius: 50%;
              margin-right: 24px;
              background: url("../../assets/images/hyme_avat@2x.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
            .xxx {
              width: 84px;
              height: 84px;
              border-radius: 50%;
              margin-right: 24px;
              background: url("../../assets/images/x_avator.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
            .details_descript {
              .name {
                width: 85px;
                height: 24px;
                font-size: 24px;
                font-family: "HiraKakuProN";
                font-weight: 600;
                color: #000000;
                line-height: 24px;
              }
              .button_icon {
                margin-top: 12px;
                display: flex;
                button {
                  width: 60px;
                  height: 22px;
                  background: #f5f8ff;
                  border-radius: 11px;
                  border: none;
                  font-size: 12px;
                  font-family: "HiraKakuProN";
                  font-weight: normal;
                  color: #000000;
                  margin-right: 16px;
                  &:nth-child(2) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    div {
                      width: 16px;
                      height: 16px;
                      margin-right: 5px;
                      background: url("../../assets/images/new_bfs@2x.png");
                      background-repeat: no-repeat;
                      background-size: 100% 100%;
                    }
                  }
                }
                .icon {
                  width: 20px;
                  height: 20px;
                  background: #3015ff;
                  margin-right: 16px;
                  border-radius: 50%;
                  cursor: pointer;
                  &:nth-child(3) {
                    background: url("../../assets/images/cancel_small_blue@2x.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                  &:nth-child(4) {
                    background: url("../../assets/images/arrow_small_blue@2x.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                  &:nth-child(5) {
                    background: url("../../assets/images/bot_blue@2x.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                  &:nth-child(6) {
                    margin-right: 0;
                    background: url("../../assets/images/link_blue@2x.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                  }
                }
              }
            }
          }

          .text {
            width: 563px;
            height: 64px;
            font-size: 16px;
            font-family: "HiraKakuProN";
            font-weight: normal;
            color: rgba(0, 0, 0, 0.88);
            line-height: 32px;
            margin-top: 14px;
          }
        }
        &:nth-child(2) {
          flex: 1;
          button {
            width: 200px;
            height: 56px;
            background: #0d52fc;
            border-radius: 15px;
            border: none;
            font-size: 16px;
            font-family: "HiraKakuProN";
            font-weight: normal;
            color: #ffffff;
            line-height: 24px;
            margin-left: 675px;
            margin-top: 20px;
          }
          .text {
            display: flex;
            justify-content: space-between;
            line-height: 24px;
            font-family: "HiraKakuProN";
            font-weight: normal;
            margin-top: 18px;
            font-size: 20px;
            p {
              &:nth-child(1) {
                color: rgba(153, 153, 153, 1);
              }
              &:nth-child(2) {
                color: #000000;
              }
            }
          }
          .progress {
            margin-top: 12px;
          }
        }
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      margin: 40px 0 80px;
      .picture {
        width: 1041px;
        height: 562px;
        border-radius: 20px;
        background: url("../../assets/images/card_big@2x.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .hyme {
        width: 1041px;
        height: 562px;
        border-radius: 20px;
        background: url("../../assets/images/hym_big@2x.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .xxx {
        width: 1041px;
        height: 562px;
        border-radius: 20px;
        background: url("../../assets/images/x_big@2x.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .introduce {
        width: 373px;
        height: 562px;
        background: #f5f8ff;
        border-radius: 20px;
        margin-left: 24px;
        padding: 24px 20px 54px;
        box-sizing: border-box;
        overflow-y: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar {
          width: 0;
        }
        .title {
          font-size: 20px;
          font-family: "HiraKakuProN";
          font-weight: 600;
          color: #000000;
          line-height: 24px;
        }
        .subheading {
          font-size: 14px;
          font-family: "HiraKakuProN";
          font-weight: 600;
          color: #0d52fc;
          line-height: 21px;
          margin-top: 24px;
        }
        .details {
          display: flex;
          justify-content: space-between;
          margin-top: 16px;
          p {
            &:nth-child(1) {
              font-size: 14px;
              font-family: "HiraKakuProN";
              font-weight: normal;
              color: #939599;
              line-height: 21px;
            }
            &:nth-child(2) {
              font-size: 14px;
              font-family: "HiraKakuProN";
              font-weight: normal;
              color: #000000;
              line-height: 21px;
              display: flex;
              align-items: center;
              .thead {
                width: 12px;
                height: 12px;
                background: url("../../assets/images/new_error@2x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                margin-right: 8px;
                cursor: pointer;
              }
              .popover {
                font-size: 14px !important;
                font-family: "HiraKakuProN";
                font-weight: normal;
                color: #000000;
                line-height: 21px;
              }
            }
          }
        }
        .line {
          width: 333px;
          border: 1px solid #e5e5e5;
          margin-top: 24px;
        }
      }
    }
    .schedule_Allocation {
      .tab {
        font-size: 24px;
        font-family: "HiraKakuProN";
        font-weight: 600;
        line-height: 24px;
      }
      .dataTable {
        margin: 39px 0 84px;
      }
      .allocation {
        display: flex;
        justify-content: space-between;
        margin: 39px 0 84px;
        .allocation_dataTable {
          flex: 1;
          height: 200px;
        }
        button {
          width: 200px;
          height: 56px;
          background: #0d52fc;
          border-radius: 15px;
          font-size: 16px;
          font-family: "HiraKakuProN";
          font-weight: normal;
          color: #ffffff;
          line-height: 24px;
          border: none;
          margin-left: 40px;
          cursor: pointer;
        }
      }
    }
  }
  :deep(.n-data-table-td) {
    font-size: 16px;
    font-family: "HiraKakuProN";
    font-weight: normal;
    color: #6f6f6f;
  }
}

:deep(.n-data-table-th) {
  background: #f5f8ff;
}

:deep(.n-progress-graph-line-fill) {
  background: linear-gradient(90deg, #1e8afe 0%, #0d52fc 100%) !important;
  margin: 0 !important;
}
button {
  cursor: pointer;
}
</style>
