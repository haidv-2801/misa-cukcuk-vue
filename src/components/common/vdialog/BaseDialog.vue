<template>
  <div class="alert">
    <slot name="icon-close"></slot>
    <div class="alert__title">
      <div class="title__text">
        <!-- slot head -->
        <slot name="head"></slot>
      </div>
    </div>
    <div class="alert__main">
      <!-- slot main -->
      <slot name="main"></slot>
    </div>
    <div class="alert__bottom">
      <!-- slot bottom -->
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.btn {
  outline: none;
  border: none;
  font-family: GoogleRegular;
  height: 40px;
  border-radius: 5px;
}

.alert {
  z-index: 4000;
  height: fit-content;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%);
  border-radius: 6px;
  border-collapse: separate;
}

.alert__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: GoogleBold;
  font-size: 15px;
  padding: 24px 5px 0px 24px;
}

.alert__main {
  font-size: 13px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 24px;
}

.main__icon svg {
  width: 20px;
  height: 20px;
}

.main__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #f4f4f4;
  border-radius: 50%;
}

.main__text {
  padding-left: 10px;
  flex: 1;
}

.alert__bottom {
  height: 60px;
  background-color: #f4f4f4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 24px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.alert__iconClose {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
}

.alert__iconClose svg {
  width: 20px;
  height: 20px;
  font-weight: 200;
}

.alert__iconClose:hover {
  background-color: #f4f4f4;
}
</style>
