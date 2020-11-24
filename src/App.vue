<template>
  <div class="flex flex-col h-screen">
    <header
      class="h-24 flex items-center px-6 bg-gray-800 text-gray-300 font-medium"
    >
      <div class="space-x-2">
        <router-link
          class="uppercase tracking-wide py-2 px-3 rounded hover:bg-gray-500 hover:text-gray-100 focus:outline-none focus:bg-gray-500"
          to="/"
          >Azure Translator</router-link
        >
        <router-link
          class="py-2 px-3 rounded hover:bg-gray-500 hover:text-gray-100 focus:outline-none focus:bg-gray-500"
          to="/about"
          >About</router-link
        >
      </div>
    </header>
    <body class="flex-grow py-2 md:py-8 bg-gray-500">
      <div class="container mx-auto">
        <router-view />
      </div>
    </body>
    <footer class="h-14 px-6 flex items-center bg-gray-700">
      <p class="font-medium text-gray-300">
        Copyright &copy;
        <a
          class="text-green-300 hover:text-green-400 hover:underline"
          href="//github.com/dnwandana"
          >Wandana</a
        >
      </p>
    </footer>
  </div>
</template>

<!-- <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
