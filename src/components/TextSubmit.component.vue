<template>
  <div>
    <input :value="value" @input="input" @keyup.enter="submit" type="text" />
    <button @click="submit">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: 'TextSubmit',
  props: {
    value: String,
    submit: Function,
    buttonText: { type: String, default: 'Submit' },
  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value);
    },
  },
}
</script>
