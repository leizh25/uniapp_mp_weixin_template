<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <text>{{ counterStore.count }}</text>
    </view>
    <view>
      <button @click="counterStore.count++">+</button>
      <button @click="counterStore.count--">-</button>
    </view>
    <img src="https://img.yzcdn.cn/vant/leaf.jpg" alt="" />
    <video src="https://www.w3school.com.cn/i/movie.ogg"></video>
  </view>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const title = ref("Hello");
onLoad(() => {});
const counterStore = useCounterStore();
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
