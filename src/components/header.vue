<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faShoppingCart, faTimes);

export default {
    name: 'Header',
    components: {
        FontAwesomeIcon
    },
    props: {
        cartCount: {
            type: Number,
            required: true
        },
        showCart: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            query: ''
        };
    },
    watch: {
        query(newQuery) {
            if (newQuery === '') {
                localStorage.removeItem('searchQuery');
            }
            this.$emit('search', newQuery);
        }
    },
    methods: {
        toggleCart() {
            this.$emit('toggle-cart');
        },
        clearQuery() {
            this.query = '';
        }
    }
};
</script>

<template>
    <header>
        <nav>
            <div class="flex justify-between bg-[#002541] text-white p-2 lg:p-4 font-semibold text-[16px]">
                <div class="flex gap-6 lg:ml-8 items-center">
                    <h1><router-link to="/">TMDB</router-link></h1>
                    <p class="hidden lg:block"><a href="https://www.themoviedb.org/movie" target="_blank">Movies</a></p>
                    <p class="hidden lg:block"><a href="https://www.themoviedb.org/tv" target="_blank">TV Shows</a></p>
                    <p class="hidden lg:block"><a href="https://www.themoviedb.org/person" target="_blank">People</a></p>
                    <p class="hidden lg:block"><a href="https://www.themoviedb.org/talk" target="_blank">More</a></p>
                </div>
                <div class="flex gap-2 lg:gap-6 lg:mr-8 items-center relative">
                    <input type="text" v-model="query" placeholder="Search movies..."
                        class="lg:p-2 p-1 rounded text-red-900" />
                    <span v-if="query.length > 0" @click="clearQuery"
                        class="absolute top-1/2 right-[30px] lg:right-[50px] text-red-700 -translate-y-1/2 cursor-pointer ">
                        <font-awesome-icon :icon="['fas', 'times']" />
                    </span>
                    <span @click="toggleCart" class="relative cursor-pointer">
                        <font-awesome-icon :icon="showCart ? ['fas', 'times'] : ['fas', 'shopping-cart']" />
                        <span v-if="cartCount > 0 && !showCart"
                            class="absolute top-[-10px] left-0 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                            {{ cartCount }}
                        </span>
                    </span>
                </div>
            </div>
        </nav>
    </header>
</template>
