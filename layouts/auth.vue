<template>
  <div class="cont-auth">

    <div class="row auth-cont-max">
      <div class="col-md-6 cont-left p-0 m-0">
        <img width="200px" src="../assets/img/logo.png" alt="">
      </div>
      <div class="col-md-6 p-0 m-0 bg-white">
        <div class="shadow-sm area-auth p-4 rounded">
          <Nuxt />
        </div>
      </div>
    </div>

  </div>
</template>

<style>
.cont-left {
  background-color: #273a5a;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cont-auth {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f0ffff;
}

.auth-cont-max
{
    width:800px;
}
</style>

<script>
export default {};
</script>