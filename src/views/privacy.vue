<template>
  <nav :class="[isBottom ? 'hideMenu' : 'menu']">
    <n-anchor
      style="z-index: 9999"
      ignore-gap
      class="anchor"
      :show-background="false"
      affix
      :bound="50"
    >
      <n-anchor-link title="Privacy Policy of TokenMarvel" href="#policy">
        <n-anchor-link title="Introduction" href="#introduction" />
        <n-anchor-link title="Information Collection" href="#information" />
        <n-anchor-link title="Use of Information" href="#use" />
        <n-anchor-link title="Information Sharing" href="#sharing" />
        <n-anchor-link title="Data Security" href="#security" />
        <n-anchor-link title="International Data Transfers" href="#transfers" />
        <n-anchor-link title="Your Rights" href="#yourRight" />
        <n-anchor-link title="Changes to Privacy Policy" href="#change" />
        <n-anchor-link title="Contact Us" href="#comtactUs" />
      </n-anchor-link>
    </n-anchor>
  </nav>
  <div class="rule-wrap">
    <h1 id="policy">Privacy Policy of TokenMarvel</h1>

    <div>
      <h2 id="introduction">1. Introduction</h2>
      <p>
        Welcome to the Privacy Policy of TokenMarvel. This policy outlines our
        practices regarding the collection, use, and sharing of your personal
        information through our services, including our Telegram Group (TG) and
        official website. We are committed to protecting your privacy and
        handling your data in an open and transparent manner.
      </p>
    </div>
    <div>
      <h2 id="information">2. Information Collection</h2>
      <p>
        Personal Information: We may collect personal information such as your
        name, email address, and other contact details when you interact with
        our services, sign up on our website, or participate in our TG group.
      </p>
      <p>
        Usage Data: Information about how you access and use our services,
        including your IP address, browser type, device information, and usage
        patterns.
      </p>
      <p>
        Cookies and Tracking Technologies: We use cookies and similar
        technologies to enhance your experience, understand service usage, and
        improve our offerings.
      </p>
    </div>
    <div>
      <h2 id="use">3. Use of Information</h2>
      <p>The information we collect is used for:</p>
      <p>Providing and improving our services.</p>
      <p>
        Communicating with you about updates, offers, and other relevant
        information.
      </p>
      <p>Analyzing and understanding our audience for service enhancement.</p>
      <p>Ensuring the security and integrity of our services.</p>
    </div>

    <div>
      <h2 id="sharing">4. Information Sharing</h2>
      <p>
        We do not sell or rent your personal information to third parties. We
        may share your information:
      </p>
      <p>With service providers who assist us in offering our services.</p>
      <p>
        For legal reasons, if required by law or if necessary to protect our
        rights or the rights of others.
      </p>
      <p>
        In the event of a business transfer, such as a merger, acquisition, or
        sale of assets.
      </p>
    </div>

    <div>
      <h2 id="security">5. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to
        protect your data from unauthorized access, loss, or alteration.
      </p>
    </div>
    <div>
      <h2 id="transfers">6. International Data Transfers</h2>
      <p>
        Your information may be transferred to, and processed in, countries
        other than the country in which you reside. We ensure that appropriate
        safeguards are in place for such transfers.
      </p>
    </div>
    <div>
      <h2 id="yourRight">7. Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal
        information. You can also object to or restrict certain processing of
        your data.
      </p>
    </div>
    <div>
      <h2 id="change">8. Changes to Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any significant changes and update the "Effective Date" at the top of
        this policy.
      </p>
    </div>
    <div>
      <h2 id="comtactUs">9. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our data
        practices, please contact us at support@tokenmarvel.com.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
let isBottom = ref(false);
/**判断页面到底部*/
function handleScroll() {
  let { scrollY, innerHeight } = window;
  isBottom.value =
    scrollY + innerHeight + 200 >= document.body.scrollHeight ? true : false;
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.rule-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  div {
    margin-top: 20px;
  }

  p {
    font-size: 16px;
    font-family: "HiraKakuProN", "HiraKakuProN";
  }
}

@media only screen and (min-width: 640px) {
  .rule-wrap {
    padding: 20px 0;
    padding-left: 500px;
    padding-right: 240px;
  }
  .menu {
    position: fixed;
    left: 200px;
    top: 120px;
    display: bolock;
    .anchor {
      width: 250px;
      overflow: hidden;
      padding-right: 50px;
    }
  }
  .hideMenu {
    display: none;
  }
}

@media only screen and (max-width: 640px) {
  .rule-wrap {
    padding: 20px;
  }
  .menu {
    display: none;
  }
}
</style>
