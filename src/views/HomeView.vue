<script setup>
import Card from "../components/design_system/Card.vue";
import Button from "../components/design_system/Button.vue";
import InfoBlockVue from "../components/common/InfoBlock.vue";
import TabLayoutVue from "../components/for_view/TabLayout.vue";

const cardInfo = [
  {
    title: "Ek Hizmetler",
    content:
      "Seyahatinizi zenginleştirmenizi sağlayacak otel rezervasyonu ve araç kiralama gibi hizmetlerimizden faydalanabilirsiniz.",
  },
  {
    title: "Seyahat Gereksinimleri",
    content:
      "İnteraktif harita uygulamamızı kullanarak ülkelerin güncel seyahat gereksinimlerine erişebilirsiniz.",
  },
  {
    title: "Turkish Airlines Gift Card",
    content:
      "Turkish Airlines Gift Card satın alarak sevdiklerinize sürpriz bir seyahat deneyimi armağan edebilir, onlara yeni yerler keşfetmenin heyecanını yaşatabilirsiniz.",
  },
];
</script>

<template>
  <TabLayoutVue />
  <section>
    <Card
      v-for="card in cardInfo"
      :key="card.title"
      :title="card.title"
      :content="card.content"
    ></Card>
  </section>
  <InfoBlockVue />
</template>

<style scoped>
.tk-booker-nav {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
}
.tk-booker-bottom-tabs {
  list-style-type: none;
  padding: 0;
  margin-bottom: 30px;
  display: flex;
}

.tk-booker-bottom-tab {
  width: calc((100% - 2 * 2rem) / 3);
  background-color: #fff;
  margin-right: 2rem;
  border-radius: 3px;
  box-shadow: 0 1px 8px 4px rgb(0 0 0 / 12%);
}

@media (max-width: 767px) {
  .tk-booker-nav {
    display: none;
  }
}
</style>
