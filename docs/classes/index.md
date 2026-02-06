---
title: Classes
description: Choose your class – stats/tiers for 99 Nights Forest
---

<script setup lang="ts">
import { ref } from 'vue'
import classesData from '../../data/classes.json'

const classes = ref(classesData)
</script>

<div class="classes-grid">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Tier</th>
        <th>HP</th>
        <th>ATK</th>
        <th>DEF</th>
        <th>SPD</th>
        <th>Desc</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="cls in classes" :key="cls.name">
        <td>{{ cls.name }}</td>
        <td>{{ cls.tier }}</td>
        <td>{{ cls.stats.hp }}</td>
        <td>{{ cls.stats.atk }}</td>
        <td>{{ cls.stats.def }}</td>
        <td>{{ cls.stats.spd }}</td>
        <td>{{ cls.desc }}</td>
      </tr>
    </tbody>
  </table>
</div>

<style scoped>
.classes-grid {
  overflow-x: auto;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
</style>