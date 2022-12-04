<script>
import DocumentationIcon from "../icons/IconDocumentation.vue";
import ToolingIcon from "../icons/IconTooling.vue";
import EcosystemIcon from "../icons/IconEcosystem.vue";
import CommunityIcon from "../icons/IconCommunity.vue";
import SupportIcon from "../icons/IconSupport.vue";

export default {
  components: {
    DocumentationIcon,
    ToolingIcon,
    EcosystemIcon,
    CommunityIcon,
    SupportIcon,
  },
  props: {
    title: String,
    content: String,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <a href="https://www.turkishairlines.com/tr-tr/ek-hizmetler/">
    <div class="tk-booker-bottom-tab-content">
      <div class="content-icon">
        <div class="icon"></div>
      </div>
      <div class="tab-content-info">
        <div class="info-title">
          <h2>{{ title }}</h2>
        </div>
        <div class="info-text">
          <p>{{ content }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.tk-booker-bottom-tab {
  background-color: #fff;
  margin-right: 2rem;
  border-radius: 3px;
  box-shadow: 0 1px 8px 4px rgb(0 0 0 / 12%);
}
.tk-booker-bottom-tab-content {
  display: flex;
}
.content-icon {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
  align-items: center;
}

.tab-content-info {
  padding: 20px 20px 10px 0;
  text-align: left !important;
  vertical-align: middle;
}
.info-text p {
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  color: #647280;
  margin-top: 7px;
}

@media (min-width: 768px) {
  .tk-booker-bottom-tab {
    width: 50%;
  }
}
</style>
