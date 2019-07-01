<template>
  <div class="container">
    <div class="menu">
      <i class="fas fa-ellipsis-h"></i>
      <div class="columns">
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
      </div>
    </div>
    <div class="menu">
      <i class="fas fa-ellipsis-h"></i>
      <div class="columns">
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
      </div>
    </div>
    <div class="menu">
      <i class="fas fa-ellipsis-h"></i>
      <div class="columns">
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
        <div class="col">content</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style lang="scss">
.container {
  width: 70%;
  margin: 5% auto;
//   background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  .menu {
    width: 40px;
    height: 40px;
    background: rgba(249, 249, 249, 0.8);
    // margin: 5%;
    transition: all 0.4s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    .columns {
      display: none;
    }
    &:hover {
      cursor: pointer;
      width: 80vw;
      height: 70vh;
      // margin: 20px;
      transition: all 0.4s ease-in-out;
      .fas {
        display: none;
      }
      .columns {
        height: 100%;
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        flex-wrap: wrap;
        .col {
          padding: 0;
          width: 30%;
          background: rgba(0, 0, 0, 0.6);
          height: 100px;
        }
      }
    }
  }
}
</style>