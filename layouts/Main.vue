<script lang="ts" setup>
const handleError = (error: any) => {
  error.value = null;
};

const logError = (error: any) => {
  console.error(error);
};
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <slot name="header">
      <Header />
    </slot>
    <NuxtErrorBoundary @error="logError">
      <main class="flex-1 w-full flex flex-col mx-auto">
        <div class="relative flex-1 flex flex-col w-full h-full min-h-[80vh]">
          <slot />
        </div>
      </main>
      <template #error="{error}">
        <div class="flex-center flex-col gap-[30px] p-4 min-h-[50rem]">
          <h5>
            There was an error
            <i class="far fa-face-sad-cry bg-yellow rounded-full"></i>
          </h5>
          <pre> {{ error }} </pre>
          <button
            @click="handleError(error)"
            v-text="'Clear the error'" />
        </div>
      </template>
    </NuxtErrorBoundary>
    <slot name="footer">
      <Footer />
    </slot>
  </div>
</template>
