<template>
    <div class="container">
        <div class="loader-spinner">
            <svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="load one" cx="60" cy="60" r="20" pathLength="1" />
            <circle class="load two" cx="60" cy="60" r="10" />
            <circle class="load three" cx="60" cy="60" r="30" pathLength="1" />
            </svg>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
$color: #028fd2;

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader-spinner {
  width: 150px;
  height: 150px;
  
  svg {
    width: 90%;
    fill: none;
   } 
}

.load {
  transform-origin: 50% 50%;
  stroke-dasharray: 0.7 0.3;
  stroke-linecap: round;
  stroke-width: 3px;
  stroke: $color;

  &.one {
    animation: load 1.5s infinite ease-in;
    animation-direction: reverse;
  }
  &.two {
    fill: $color;
  }
  &.three {
    animation: load 1.5s infinite;
  }
}

@keyframes load {
  100% {
    transform: rotate(360deg);
  }
}

</style>