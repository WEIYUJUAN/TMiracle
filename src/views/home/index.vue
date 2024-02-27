<template>
  <div class="home_box">
    <div class="banner">
      <div class="bg"></div>
      <div class="logo"></div>
      <div class="logo_title ispc">
        <span>TokenMarvel</span> is the <br class="pc" />easiest launch place
        to<br class="pc" />
        get your crypto marvel.
      </div>
      <div class="logo_title ismobile">
        <span>TokenMarvel</span> is the
        <br />
        easiest launch place
        <br />
        to get your
        <br />
        crypto marvel.
      </div>
      <button>
        <a href="https://t.me/tokenmarvel" target="_blank">Get started now</a>
      </button>
    </div>
    <main>
      <div class="inner crypto">
        <div>
          <section></section>
        </div>
        <div>
          <div class="text">Discover the new crypto chances.</div>
          <button>
            <a href="https://t.me/tokenmarvel" target="_blank">Explore more</a>
          </button>
        </div>
      </div>
      <div class="inner project">
        <div class="mobile">
          <section></section>
        </div>
        <div class="project_text">
          <div class="text">
            Participate in the launch of the new crypto projects.
          </div>
          <button>
            <a href="https://t.me/tokenmarvel" target="_blank"
              >Get started now</a
            >
          </button>
        </div>
        <div class="pc">
          <section></section>
        </div>
      </div>
      <div class="inner getNewCrypto">
        <div>
          <section></section>
        </div>
        <div>
          <div class="text">
            Get early access <br />
            to the new <br />crypto projects.
          </div>
          <button>
            <a href="https://t.me/tokenmarvel" target="_blank">Explore more</a>
          </button>
        </div>
      </div>
      <div class="TonMarvel">
        <div class="mobile"></div>
        <div class="TonMarvel_text">
          <section>Start the projects with TokenMarvel.</section>
          <section>Submit the projects and unlock the potential.</section>
          <button>
            <a
              href="https://qovm57le89b.typeform.com/to/JcOsyfd0"
              target="_blank"
              >Apply Now</a
            >
          </button>
        </div>
        <div class="pc">
          <section></section>
        </div>
      </div>
      <div class="startedByMinute">
        <div>Get started in a few minutes.</div>
        <div>
          <section>
            <div class="Wallet_img img"></div>
            <p class="title">Create a new telegram wallet</p>
          </section>
          <section>
            <div class="assets_img img"></div>
            <p class="title">Deposite crypto</p>
          </section>
          <section>
            <div class="marvel_img img"></div>
            <p class="title">Start the crypto marvel</p>
          </section>
        </div>
      </div>
      <div class="ecosystem">
        <div class="title">TokenMarvel Ecosystem</div>
        <div class="text">
          <div class="diamon"></div>
          <div class="ether"></div>
          <div class="squre"></div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
@media only screen and (max-width: 640px) {
  /* 在这里添加移动端样式 */
  .home_box {
    .banner {
      width: 375px;
      height: 375px;
      position: relative;
      .bg {
        width: 375px;
        height: 375px;
        position: absolute;
        top: 0;
        right: 0;
        background: url("../../assets/images/mobile_bg@3x.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .logo {
        width: 164px;
        height: 161px;
        position: absolute;
        top: 100px;
        left: 112px;
        background: url("../../assets/images/banner_logo——big@2x.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        z-index: 999;
      }

      .ispc {
        display: none;
      }
      .ismobile {
        display: block;
      }
      .logo_title {
        width: 264px;
        height: 128px;
        font-size: 24px;
        font-family: "HiraKakuProN";
        font-weight: 600;
        color: rgba(0, 0, 0, 0.88);
        position: absolute;
        top: 350px;
        left: 56px;
        line-height: 32px;
        text-align: center;
        span {
          color: #0d52fc;
        }
        .pc {
          display: none;
        }
      }
      button {
        width: 214px;
        height: 40px;
        background: #0d52fc;
        border-radius: 10px;
        border-radius: 15px;
        font-size: 16px;
        font-family: "HiraKakuProN", "HiraKakuProN";
        font-weight: normal;
        color: #ffffff;
        position: absolute;
        top: 500px;
        left: 81px;
        border: none;
        cursor: pointer;
      }
    }
    main {
      margin-top: 199px;
      .crypto {
        div {
          &:nth-child(1) {
            background: #0d52fc;
            height: 316px;
            display: flex;
            align-items: center;
            justify-content: center;
            section {
              width: 250px;
              height: 178px;
              background: url("../../assets/images/cicie@2x.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
          }
          &:nth-child(2) {
            position: relative;
            height: 316px;

            .text {
              width: 264px;
              height: 64px;
              font-size: 24px;
              font-family: "HiraKakuProN";
              font-weight: 600;
              color: #000000;
              line-height: 32px;
              position: absolute;
              top: 89px;
              left: 56px;
              background: #f1f2f3;
              text-align: center;
            }
            button {
              width: 214px;
              height: 40px;
              background: #0d52fc;
              border-radius: 10px;
              border: none;
              position: absolute;
              top: 195px;
              left: 81px;
              font-size: 14px;
              font-weight: normal;
              line-height: 21px;
              font-family: "HiraKakuProN", "HiraKakuProN";
              color: #ffffff;
              cursor: pointer;
            }
          }
        }
      }
      .project {
        .mobile {
          height: 316px;
          background: #0d52fc;
          display: flex;
          align-items: center;
          justify-content: center;
          section {
            width: 145px;
            height: 225px;
            background: url("../../assets/images/mobile_phone@2x.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
        .project_text {
          position: relative;
          height: 316px;
          .text {
            width: 264px;
            height: 96px;
            font-size: 24px;
            line-height: 32px;
            font-family: "HiraKakuProN", "HiraKakuProN";
            font-weight: 600;
            color: rgba(0, 0, 0, 0.88);
            background: #f1f2f3;
            position: absolute;
            top: 57px;
            left: 56px;
            text-align: center;
          }
          button {
            width: 214px;
            height: 40px;
            background: #0d52fc;
            border-radius: 10px;
            border: none;
            position: absolute;
            top: 195px;
            left: 81px;
            font-size: 14px;
            font-family: "HiraKakuProN", "HiraKakuProN";
            color: #ffffff;
            cursor: pointer;
          }
        }
        .pc {
          display: none;
        }
      }
      .getNewCrypto {
        div {
          &:nth-child(1) {
            background: #0d52fc;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 316px;
            section {
              width: 279px;
              height: 190px;
              background: url("../../assets/images/mobile_book@2x.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
          }
          &:nth-child(2) {
            position: relative;
            height: 316px;
            .text {
              width: 264px;
              height: 96px;
              font-size: 24px;
              text-align: center;
              font-family: "HiraKakuProN";
              font-weight: 600;
              color: #000000;
              line-height: 32px;
              background: #f1f2f3;
              position: absolute;
              top: 57px;
              right: 56px;
            }
            button {
              width: 214px;
              height: 40px;
              background: #0d52fc;
              border-radius: 10px;
              border: none;
              position: absolute;
              top: 195px;
              right: 81px;
              font-size: 14px;
              font-family: "HiraKakuProN", "HiraKakuProN";
              color: #ffffff;
              cursor: pointer;
            }
          }
        }
      }
      .TonMarvel {
        margin: 16px 56px 0;
        height: 381px;
        .TonMarvel_text {
          margin-top: 8px;
          section {
            &:nth-child(1) {
              width: 279px;
              height: 64px;
              font-size: 24px;
              font-family: "HiraKakuProN";
              font-weight: 600;
              color: #000000;
              line-height: 32px;
              text-align: center;
            }
            &:nth-child(2) {
              width: 238px;
              height: 40px;
              font-size: 14px;
              font-family: "HiraKakuProN";
              font-weight: normal;
              color: rgba(0, 0, 0, 0.88);
              line-height: 20px;
              text-align: center;
              margin-top: 5px;
            }
          }
          button {
            width: 214px;
            height: 40px;
            background: #0d52fc;
            border-radius: 10px;
            font-size: 14px;
            font-family: "HiraKakuProN", "HiraKakuProN";
            color: #ffffff;
            margin-top: 41px;
            margin-left: 31px;
            border: none;
            cursor: pointer;
          }
        }
        .pc {
          display: none;
        }
        .mobile {
          width: 264px;
          height: 178px;
          background: url("../../assets/images/new_computer@2x.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
      .startedByMinute {
        padding: 97px 55px 0;
        // width: 375px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        div {
          &:nth-child(1) {
            width: 264px;
            height: 64px;
            font-size: 24px;
            font-family: "HiraKakuProN", "HiraKakuProN";
            font-weight: 600;
            color: #000000;
            line-height: 32px;
            text-align: center;
          }
          &:nth-child(2) {
            margin-top: 61px;

            section {
              width: 323px;
              height: 192px;
              background: #f5f8ff;
              border-radius: 20px;
              cursor: pointer;
              position: relative;
              &:nth-child(2),
              &:nth-child(3) {
                margin-top: 121px;
              }
              .title {
                width: 100%;
                font-size: 18px;
                font-family: "HiraKakuProN", "HiraKakuProN";
                font-weight: 600;
                color: rgba(0, 0, 0, 0.88);
                text-align: center;
                line-height: 20px;
                margin: auto;
                position: absolute;
                bottom: 45px;
                text-align: center;
              }
              .img {
                margin: auto;
              }
              .Wallet_img {
                width: 212px;
                height: 115px;
                position: absolute;
                top: -19px;
                left: 50%;
                transform: translateX(-50%);
                margin-bottom: 31px;
                background: url("../../assets/images/computed_small@2x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
              }
              .assets_img {
                width: 84px;
                height: 183px;
                position: absolute;
                top: -79px;
                left: 50%;
                transform: translateX(-50%);
                margin-bottom: 23px;
                background: url("../../assets/images/download@2x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
              }
              .marvel_img {
                width: 232px;
                height: 208px;
                position: absolute;
                top: -100px;
                left: 50%;
                transform: translateX(-50%);
                background: url("../../assets/images/gift@2x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
              }
            }
          }
        }
      }
      .ecosystem {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 97px;

        .title {
          width: 264px;
          height: 64px;
          font-size: 24px;
          text-align: center;
          font-family: "HiraKakuProN";
          font-weight: 600;
          color: #000000;
          line-height: 32px;
          margin-bottom: 42px;
        }

        .text {
          display: flex;
          flex-direction: column;
          align-items: center;

          div {
            margin-bottom: 42px;
          }

          .diamon {
            width: 252px;
            height: 132px;
            background: url("../../assets/images/456_hover.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
            transition: all 0.3s linear;

            &:hover {
              width: 252px;
              height: 132px;
              background: url("../../assets/images/456.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
          }

          .ether {
            width: 252px;
            height: 132px;
            background: url("../../assets/images/234_hover.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
            transition: all 0.3s linear;

            &:hover {
              width: 252px;
              height: 132px;
              background: url("../../assets/images/234.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
          }
          .squre {
            width: 252px;
            height: 132px;
            background: url("../../assets/images/123_hover.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
            transition: all 0.3s linear;

            &:hover {
              width: 252px;
              height: 132px;
              background: url("../../assets/images/123.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 640px) {
  /** pc端样式处理*/
  .home_box {
    .banner {
      height: 1007px;
      padding: 0 240px;
      position: relative;
      .bg {
        width: 1352px;
        height: 915px;
        position: absolute;
        top: 0;
        right: 0;
        background: url("../../assets/images/banner_startBg@2x.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .logo {
        width: 563px;
        height: 552px;
        position: absolute;
        top: 158px;
        right: 287px;
        background: url("../../assets/images/banner_logo——big@2x.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        z-index: 999;
      }

      .ispc {
        display: block;
      }
      .ismobile {
        display: none;
      }
      .logo_title {
        width: 757px;
        height: 216px;
        font-size: 56px;
        font-family: "HiraKakuProN", "HiraKakuProN";
        font-weight: normal;
        line-height: 72px;
        position: absolute;
        top: 313px;
        z-index: 999;
        span {
          color: #0d52fc;
        }
      }
      button {
        width: 200px;
        height: 56px;
        background: #0d52fc;
        border-radius: 15px;
        font-size: 16px;
        font-family: "HiraKakuProN", "HiraKakuProN";
        font-weight: normal;
        color: #ffffff;
        position: absolute;
        top: 597px;
        z-index: 999;
        border: none;
        cursor: pointer;
      }
    }
    main {
      .inner {
        display: flex;
        height: 810px;
        div {
          flex: 1;
          &:nth-child(1) {
          }
        }
      }

      .crypto {
        div {
          &:nth-child(1) {
            background: #0d52fc;
            display: flex;
            align-items: center;
            justify-content: center;
            section {
              width: 642px;
              height: 457px;
              background: url("../../assets/images/cicie@2x.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
          }
          &:nth-child(2) {
            position: relative;
            .text {
              width: 657px;
              height: 200px;
              font-size: 64px;
              font-family: "HiraKakuProN", "HiraKakuProN";
              font-weight: 600;
              color: rgba(0, 0, 0, 0.88);
              line-height: 100px;
              background-color: #fff;
              position: absolute;
              top: 171px;
              left: 73px;
            }
            button {
              width: 200px;
              height: 56px;
              background: #0d52fc;
              border-radius: 15px;
              border: none;
              position: absolute;
              top: 451px;
              left: 520px;
              font-size: 16px;
              font-family: "HiraKakuProN", "HiraKakuProN";
              color: #ffffff;
              cursor: pointer;
            }
          }
        }
      }
      .project {
        .mobile {
          display: none;
        }
        .project_text {
          position: relative;
          .text {
            width: 657px;
            height: 200px;
            font-size: 64px;
            font-family: "HiraKakuProN", "HiraKakuProN";
            font-weight: 600;
            color: rgba(0, 0, 0, 0.88);
            line-height: 100px;
            background-color: #fff;
            position: absolute;
            top: 81px;
            left: 240px;
          }
          button {
            width: 200px;
            height: 56px;
            background: #0d52fc;
            border-radius: 15px;
            border: none;
            position: absolute;
            top: 461px;
            left: 240px;
            font-size: 16px;
            font-family: "HiraKakuProN", "HiraKakuProN";
            color: #ffffff;
            cursor: pointer;
          }
        }
        div {
        }
        .pc {
          background: #0d52fc;
          display: flex;
          align-items: center;
          justify-content: center;
          section {
            width: 413px;
            height: 643px;
            background: url("../../assets/images/phone@2x.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      .getNewCrypto {
        div {
          &:nth-child(1) {
            background: #0d52fc;
            display: flex;
            align-items: center;
            justify-content: center;
            section {
              width: 642px;
              height: 457px;
              background: url("../../assets/images/book@2x.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
          }
          &:nth-child(2) {
            position: relative;
            .text {
              width: 550px;
              height: 300px;
              font-size: 64px;
              font-family: "HiraKakuProN", "HiraKakuProN";
              font-weight: 600;
              color: rgba(0, 0, 0, 0.88);
              line-height: 100px;
              background-color: #fff;
              position: absolute;
              top: 115px;
              right: 240px;
              text-align: right;
            }
            button {
              width: 200px;
              height: 56px;
              background: #0d52fc;
              border-radius: 15px;
              border: none;
              position: absolute;
              top: 495px;
              right: 240px;
              font-size: 16px;
              font-family: "HiraKakuProN", "HiraKakuProN";
              color: #ffffff;
              cursor: pointer;
            }
          }
        }
      }
      .TonMarvel {
        padding: 307px 240px 0;
        height: 518px;
        display: flex;
        justify-content: space-between;
        div {
          flex: 1;
          height: 100%;
        }
        .mobile {
          display: none;
        }
        .pc {
          section {
            width: 733px;
            height: 495px;
            background: url("../../assets/images/new_computer@2x.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
        .TonMarvel_text {
          section {
            &:nth-child(1) {
              width: 754px;
              height: 200px;
              font-size: 72px;
              font-family: "HiraKakuProN", "HiraKakuProN";
              font-weight: 600;
              color: rgba(0, 0, 0, 0.88);
              line-height: 100px;
            }
            &:nth-child(2) {
              width: 679px;
              height: 128px;
              font-size: 40px;
              font-family: "HiraKakuProN", "HiraKakuProN";
              font-weight: normal;
              color: rgba(98, 98, 98, 1);
              line-height: 64px;
              margin-top: 32px;
            }
          }
          button {
            width: 200px;
            height: 56px;
            background: #0d52fc;
            border-radius: 15px;
            font-size: 16px;
            font-family: "HiraKakuProN", "HiraKakuProN";
            color: #ffffff;
            margin-top: 84px;
            border: none;
            cursor: pointer;
          }
        }
      }
      .startedByMinute {
        padding: 355px 377px 0;
        height: 421px;
        div {
          &:nth-child(1) {
            font-size: 64px;
            font-family: "HiraKakuProN", "HiraKakuProN";
            font-weight: 600;
            color: rgba(0, 0, 0, 0.88);
            line-height: 64px;
            text-align: center;
            margin-bottom: 146px;
          }
          &:nth-child(2) {
            display: flex;
            justify-content: space-between;
            section {
              width: 323px;
              height: 192px;
              background: #f5f8ff;
              border-radius: 20px;
              box-sizing: border-box;
              cursor: pointer;
              .title {
                font-size: 18px;
                font-family: "HiraKakuProN", "HiraKakuProN";
                font-weight: 600;
                color: rgba(0, 0, 0, 0.88);
                text-align: center;
                line-height: 20px;
                margin: auto;
              }
              .img {
                margin: auto;
              }
              .Wallet_img {
                width: 212px;
                height: 115px;
                margin-top: -19px;
                margin-bottom: 31px;
                background: url("../../assets/images/computed_small@2x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
              }
              .assets_img {
                width: 84px;
                height: 183px;
                margin-top: -79px;
                margin-bottom: 23px;
                background: url("../../assets/images/download@2x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
              }
              .marvel_img {
                width: 232px;
                height: 208px;
                margin-top: -100px;
                margin-bottom: 19px;
                background: url("../../assets/images/gift@2x.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
              }
            }
          }
        }
      }
      .ecosystem {
        padding: 322px 530px 251px;
        .title {
          width: 860px;
          height: 64px;
          font-size: 64px;
          font-family: "HiraKakuProN";
          font-weight: 600;
          color: rgba(0, 0, 0, 0.88);
          line-height: 64px;
          text-align: center;
        }
        .text {
          margin-top: 114px;
          display: flex;
          justify-content: space-around;
          .diamon {
            width: 252px;
            height: 132px;
            background: url("../../assets/images/456_hover.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            &:hover {
              width: 252px;
              height: 132px;
              background: url("../../assets/images/456.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
          }

          .ether {
            width: 252px;
            height: 132px;
            background: url("../../assets/images/234_hover.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
            transition: all 0.3s linear;

            &:hover {
              width: 252px;
              height: 132px;
              background: url("../../assets/images/234.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
          }
          .squre {
            width: 252px;
            height: 132px;
            background: url("../../assets/images/123_hover.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
            transition: all 0.3s linear;

            &:hover {
              width: 252px;
              height: 132px;
              background: url("../../assets/images/123.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
          }
        }
      }
    }
  }

  button {
    transition: all 0.5s linear;
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
