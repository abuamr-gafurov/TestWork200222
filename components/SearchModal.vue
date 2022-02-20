<script>
export default {
  name: "SearchModal",
  props: ["isOpen", "value"],

  data() {
    return {
      content: this.value,
      open: false
    };
  },

  methods: {
    fillValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<template>
  <div>
    <div
      class="overlay"
      @click="() => $emit('close', !isOpen)"
      :class="isOpen && 'overlay--active'"
    ></div>
    <div class="search w-6/12 md:w-4/12" :class="isOpen && 'search--active'">
      <div class="search__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
          />
        </svg>
      </div>
      <input
        @keypress.enter="() => $emit('submit', value)"
        :value="value"
        @input="fillValue"
        type="text"
        placeholder="Поиск для всего"
        class="search__fill"
      />
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition: 300ms;
  cursor: pointer;
}

.overlay--active {
  opacity: 1;
  visibility: visible;
}

.search__icon {
  position: absolute;
  fill: #8b8b8b;
  left: 15px;
  top: 15px;
  width: 15px;
}

.search__icon svg {
  width: 20px;
}

.search {
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  visibility: hidden;
  z-index: 100;
  transition: 300ms;
}

.search--active {
  opacity: 1;
  visibility: visible;
  top: 50%;
}

.search__fill {
  border-radius: 5px;
  background: #f2f2f2;
  border: none;
  width: 100%;
  padding: 16px 20px 16px 45px;
}
</style>
