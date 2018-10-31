<template>
  <div class="flex-row">
    <v-text-field :label="label" :value="value" @input.native="input" @keyup.native.enter="submit" type="text" />
    <v-btn @click="submit">{{ buttonText }}</v-btn>
  </div>
</template>

<script>
export default {
  name: 'TextSubmit',
  props: {
    buttonText: { type: String, default: 'Submit' },
    label: String,
    submit: Function,
    value: String,
  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value);
    },
  },
}
</script>

<style scoped>
.flex-row {
  display: flex;
}
</style>
