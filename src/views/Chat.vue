<template>
  <body class="bg-gray-800">
  <div class="flex flex-1 overflow-hidden h-screen max-w-screen-2xl m-auto">
    <div class="p-12 lg:p-20 w-full">
      <div class="max-h-full h-full flex flex-row">
        <!-- LEFT SIDEBAR START -->
        <aside class="w-full lg:w-2/6 bg-gray-900 rounded-lg mr-5">
          <div class="max-w-full h-full w-full flex flex-col">
            <div class="flex p-10 justify-between">
              <div class="text-4xl font-semibold text-white">
                Chat
              </div>

            </div>
            <!-- USER SECTION START -->
            <div class="flex-1 overflow-y-scroll scrollbar-width scrollbar-thumb-color">
              <div class="w-full space-y-10 ">
                <!-- USER START -->
                <div class="cursor-pointer flex px-10 ">
                  <div class="mr-4 relative w-12 ">
                    <img alt="" class="rounded-full w-full mr-2" src="https://i.pravatar.cc/300?img=3"/>
                    <div class="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0">
                    </div>
                  </div>
                  <div class="flex flex-col flex-1 ">
                    <div class="flex justify-between items-center">
                      <div class="text-gray-300 text-base font-semibold">
                        User Urbex
                      </div>
                      <div class="text-gray-600 text-xs">
                        12:00
                      </div>
                    </div>
                    <div class="text-gray-600 text-sm text-left ">
                      How are you around
                    </div>
                  </div>
                </div>
                <!-- END USER -->
              </div>
            </div>
            <!-- USER SECTION END -->
          </div>
        </aside>
        <!-- LEFT SIDEBAR END -->

        <!-- RIGHT SECTION START -->

        <section class="relative max-h-full h-full rounded-lg w-full flex flex-col bg-gray-900 lg:flex hidden">
          <!-- ALL MESSAGE START -->

          <div id="all-messages" class="flex-1 overflow-y-scroll p-5 scrollbar-thumb-color scrollbar-width space-y-5 ">
            <!-- LEFT MESSAGE START -->
            <div class="flex justify-start">
              <div class="w-14 mr-5">
                <img alt="" class="rounded-full w-full mr-2" src="https://i.pravatar.cc/300?img=3"/>
              </div>
              <div class="flex flex-col space-y-5 text-left">
                <div>
                  <span class="bg-gray-800 text-white text-base p-5 rounded-r-lg rounded-b-lg inline flex max-w-xl">How are you ?</span>
                </div>
              </div>
            </div>
            <!-- LEFT MESSAGE END -->
            <!-- RIGHT MESSAGE START -->
            <div class="flex justify-end">
              <div class="space-y-5 text-right">
                <div class="bg-indigo-800 text-white p-5 text-base rounded-l-lg rounded-b-lg inline-block max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>
            </div>
            <!-- RIGHT MESSAGE END -->
          </div>
          <!-- ALL MESSAGE END -->
          <div class="flex-none p-5">
            <div>
              <div class="relative flex">
                <!--                <span class="absolute inset-y-0 flex-items-center">-->
                <!--                  <button type="button" class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">-->
                <!--                    text-->
                <!--                  </button>-->
                <!--                </span>-->
                <input class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-400 pl-12 bg-gray-800 rounded-full py-3 pr-5"
                       placeholder="Type here ..."
                       type="text"/>
                <div class="ml-5">
                  <button
                      class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-indigo-800 hover:bg-indigo-600 focus:outline-none">
                    <svg class="feather feather-send" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                         viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <line x1="22" x2="11" y1="2" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- RIGHT SECTION END -->
      </div>
    </div>
  </div>
  </body>
</template>