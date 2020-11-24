<template>
  <!-- Alert -->
  <div
    class="flex flex-row items-center bg-blue-200 p-5 md:rounded border-b-2 border-blue-300"
  >
    <div
      class="flex items-center bg-blue-100 border-2 border-blue-500 justify-center h-10 w-10 flex-shrink-0 rounded-full"
    >
      <span class="text-blue-500">
        <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
    </div>
    <div class="ml-4">
      <div class="font-semibold text-base md:text-lg text-blue-800">
        if you're using detect language feature, it might not be detected
        properly.
      </div>
    </div>
  </div>
  <!-- Content -->
  <div class="py-2 flex flex-col">
    <!-- Selectbox -->
    <div class="flex">
      <!-- originLanguage -->
      <div class="w-1/2">
        <select
          class="w-full px-4 md:rounded-tl border-0 border-b-2 border-gray-200 bg-gray-100 text-gray-900 uppercase font-medium focus:ring-0 focus:border-gray-900"
          @change="onChange()"
          v-model="originLanguage"
        >
          <option
            v-for="lang in languages"
            :value="lang.code"
            :key="lang.code"
            >{{ lang.language }}</option
          >
        </select>
      </div>
      <!-- targetLanguage -->
      <div class="w-1/2">
        <select
          class="w-full px-4 md:rounded-tr border-0 border-b-2 border-gray-200 bg-gray-100 text-gray-900 uppercase font-medium focus:ring-0 focus:border-gray-900"
          @change="onChange()"
          v-model="targetLanguage"
        >
          <option
            v-for="lang in languages.slice(1)"
            :value="lang.code"
            :key="lang.code"
            >{{ lang.language }}</option
          >
        </select>
      </div>
    </div>
    <!-- Textarea -->
    <div class="flex flex-col md:flex-row">
      <!-- origin / user input -->
      <textarea
        class="p-4 w-full text-lg md:text-xl md:rounded-bl-md resize-none bg-gray-100 text-gray-900 font-medium placeholder-current border-l-0 border-b-0 border-gray-300 focus:ring-0 focus:border-gray-700"
        rows="6"
        placeholder="Type here"
        v-model="origin"
        @input="translate()"
      ></textarea>
      <!-- translated / auto fill -->
      <textarea
        class="p-4 w-full text-lg md:text-xl md:rounded-br-md resize-none bg-gray-200 text-gray-900 font-medium placeholder-current border-b-0 border-r-0 border-gray-300 focus:ring-0 focus:border-gray-700"
        rows="6"
        placeholder="Translation results"
        v-model="translated"
        readonly
      ></textarea>
    </div>
  </div>
</template>

<script>
import languages from "@/helper/supportedLanguages.js";
import _ from "lodash";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      languages,
      originLanguage: "detect",
      targetLanguage: "en",
      origin: "",
      translated: "",
    };
  },
  methods: {
    translate: _.debounce(async function() {
      if (this.origin.length > 0) {
        let url;
        const data = [
          {
            text: this.origin,
          },
        ];

        if (this.originLanguage === "detect") {
          url = `translate?api-version=3.0&to=${this.targetLanguage}`;
        } else {
          url = `translate?api-version=3.0&from${this.originLanguage}&to=${this.targetLanguage}`;
        }

        try {
          const res = await axios.post(url, data);
          this.translated = res.data[0].translations[0].text;
        } catch (error) {
          console.error(error);
        }
      }
    }, 1000),
    onChange() {
      this.translate();
    },
  },
};
</script>
