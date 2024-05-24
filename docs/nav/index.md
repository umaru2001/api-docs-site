---
layoutClass: nav-style
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './data'
</script>

<style src="./index.scss"></style>

# 海星来来的导航站

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

页面 Powered By [maomao](https://github.com/maomao1996/vitepress-nav-template)
