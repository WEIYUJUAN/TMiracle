<template>
  <div class="comingsoon_box">
    <div class="img"></div>
    <p>COMING SOON…</p>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@media only screen and (max-width: 640px) {
  .comingsoon_box {
    margin: auto;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    box-sizing: border-box;
    .img {
      width: 141px;
      height: 135px;
      background: url("../../assets/images/banner_logo——big@2x.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    p {
      height: 24px;
      font-size: 25px;
      font-family: "HiraKakuProN";
      font-weight: 600;
      color: #000000;
      line-height: 24px;
      margin-top: 30px;
    }
  }
}
@media only screen and (min-width: 640px) {
  .comingsoon_box {
    margin: auto;
    padding: 188px 680px 466px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img {
      width: 291px;
      height: 285px;
      background: url("../../assets/images/banner_logo——big@2x.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    p {
      height: 24px;
      font-size: 32px;
      font-family: "HiraKakuProN";
      font-weight: 600;
      color: #000000;
      line-height: 24px;
      margin-top: 43px;
    }
  }
}
</style>
