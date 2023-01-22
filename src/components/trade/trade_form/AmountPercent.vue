<template>
  <div class="d-flex bd-highlight">
    <div class="p-1 bd-highlight">
      <button type="button" class="btn btn-sm" :class="btnColorClass">
        25%
      </button>
    </div>
    <div class="p-1 bd-highlight">
      <button type="button" class="btn btn-sm" :class="btnColorClass">
        50%
      </button>
    </div>
    <div class="p-1 bd-highlight">
      <button type="button" class="btn btn-sm" :class="btnColorClass">
        75%
      </button>
    </div>
    <div class="p-1 bd-highlight">
      <button type="button" class="btn btn-sm" :class="btnColorClass">
        100%
      </button>
    </div>
    <div class="ms-auto p-2 bd-highlight">
      <span class="badge bg-light text-dark">Fee 0.1%</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["btnColorClass"],
};
</script>
