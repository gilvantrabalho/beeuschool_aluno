<template>
  <div class="cont-auth">
    <div class="row auth-cont-max">
      <div class="col-md-6 cont-left p-0 m-0">
        <img
          class="img-cont-auth"
          src="../assets/img/fundo/fundo-cont-auth.jpg"
          alt=""
        />
        <div class="fundo-cont"></div>
        <img
          style="z-index: 9999"
          width="200px"
          src="../assets/img/logo.png"
          alt=""
        />
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
  /*background-image: url("../assets/img/fundo/fundo-auth.jpg");*/
  /*background-size: 100%;*/
  /*background-position: center;*/
}

.auth-cont-max {
  width: 800px;
}

.fundo-cont {
  background: linear-gradient(180deg, rgb(13, 18, 30), rgba(25, 67, 136, 0.9));
  position: absolute;
  width: 100%;
  height: 100%;
}

.img-cont-auth {
  width: 100%;
  position: absolute;
  height: 100%;
  /*z-index: -1;*/
}
</style>

<script>
export default {};
</script>