<script setup>
import { onMounted } from 'vue'

import UnLoginHeader from '@/components/unLogin/UnLoginHeader.vue'
import Footer from '@/components/Footer.vue'

import { spline } from "https://cdn.skypack.dev/@georgedoescode/spline@1.0.1";
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@2.4.0";

onMounted(() => {
    const path = document.querySelector("path");
    const root = document.documentElement;
    let hueNoiseOffset = 0;
    let noiseStep = 0.0005;
    
    const simplex = new SimplexNoise();
    
    const points = createPoints();
    
    (function animate() {
      path.setAttribute("d", spline(points, 1, true));
    
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
    
        const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
        const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
        // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
        const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
        const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);
    
        // update the point's current coordinates
        point.x = x;
        point.y = y;
    
        // progress the point's x, y values through "time"
        point.noiseOffsetX += noiseStep;
        point.noiseOffsetY += noiseStep;
      }
    
      const hueNoise = noise(hueNoiseOffset, hueNoiseOffset);
      const hue = map(hueNoise, -150, 160, 100, 360);
    
      root.style.setProperty("--startColor", `hsl(${hue}, 100%, 75%)`);
      root.style.setProperty("--stopColor", `hsl(${hue + 60}, 100%, 75%)`);
    
      hueNoiseOffset += noiseStep / 6;
    
      requestAnimationFrame(animate);
    })();
    
    function map(n, start1, end1, start2, end2) {
      return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    }
    
    function noise(x, y) {
      return simplex.noise2D(x, y);
    }
    
    function createPoints() {
      const points = [];
      // how many points do we need
      const numPoints = 6;
      // used to equally space each point around the circle
      const angleStep = (Math.PI * 2) / numPoints;
      // the radius of the circle
      const rad = 75;
    
      for (let i = 1; i <= numPoints; i++) {
        // x & y coordinates of the current point
        const theta = i * angleStep;
    
        const x = 100 + Math.cos(theta) * rad;
        const y = 100 + Math.sin(theta) * rad;
    
        // store the point's position
        points.push({
          x: x,
          y: y,
          // we need to keep a reference to the point's original point for when we modulate the values later
          originX: x,
          originY: y,
          // more on this in a moment!
          noiseOffsetX: Math.random() * 1000,
          noiseOffsetY: Math.random() * 1000
        });
      }
    
      return points;
    }
})
</script>
<template>
    <div class="wrapper">
        <svg viewBox="0 0 200 200" class="item1">
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop id="gradientStop1" offset="0%" stop-color="var(--startColor)" />
                <stop id="gradientStop2 " offset="100%" stop-color="var(--stopColor)" />
              </linearGradient>
            </defs>
            <path d="" fill="url('#gradient')"></path>
        </svg>
        <div class="container">
            <UnLoginHeader />
            <div class="error">
                <h1 class="error__title">404</h1>
                <h2 class="error__subtitle">Вы заблудились. Но не беспокойтесь вот правильный путь</h2>
                <RouterLink class="error__button" :to="{ name: 'login' }">Вернуться назад</RouterLink>
            </div>
            <Footer />
        </div>
    </div>
</template>
<style scoped lang="sass">
svg 
    width: 110vmin
    height: 100vmin
    position: absolute
    left: 50px
.container 
    min-height: 100vh

.error 
    display: flex
    flex-direction: column
    &__title
        color: #FFF
        font-family: Rubik
        font-size: clamp(150px, 30vw, 300px)
        font-style: normal
        font-weight: 500
        line-height: 150%
        text-align: center
        margin-top: 150px
    &__subtitle
        color: #FFF
        font-variant-numeric: lining-nums proportional-nums
        font-family: Rubik
        font-size: 20px
        font-style: normal
        font-weight: 400
        line-height: 150%
        text-align: center
        margin-top: -50px
    &__button
        color: #FFF
        font-variant-numeric: lining-nums proportional-nums
        font-family: Rubik
        font-size: 16px
        font-style: normal
        font-weight: 400
        line-height: 150%
        text-decoration: none
        background-image: url('@/assets/icons/arrow.svg')
        background-repeat: no-repeat
        background-position: 35px 20px
        padding: 18px 36px 18px 63px
        border-radius: 500px
        border: 1px solid #FFF
        width: 232px
        transition: .3s
        margin: 50px auto
        &:hover
            background-position: 25px center
            transition: all .3s
</style>