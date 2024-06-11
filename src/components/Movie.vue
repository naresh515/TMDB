<script>
import Header from './header.vue';
import Cart from './cart.vue';

export default {
    components: {
        Header,
        Cart
    },
    data() {
        return {
            items: [],
            query: '',
            cart: [],
            showCart: false,
            addedItems: new Set()
        };
    },
    created() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.cart = JSON.parse(savedCart);
            this.addedItems = new Set(this.cart.map(item => item.imdbID));
        }

        const savedQuery = localStorage.getItem('searchQuery');
        if (savedQuery) {
            this.query = savedQuery;
            this.fetchMovies(savedQuery);
        }
    },
    methods: {
        fetchMovies(query) {
            if (!query) {
                this.items = [];
                return;
            }
            fetch(`https://www.omdbapi.com/?s=${query}&page=1&apikey=37a5bf41`)
                .then(response => response.json())
                .then(data => {
                    if (data.Response === "True") {
                        this.items = data.Search;
                    } else {
                        this.items = [];
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    this.items = [];
                });

            localStorage.setItem('searchQuery', query);
        },
        handleSearch(query) {
            this.query = query;
            this.fetchMovies(query);
        },
        addToCart(movie) {
            this.cart.push(movie);
            this.addedItems.add(movie.imdbID);
            this.saveCart();
        },
        removeFromCart(movie) {
            this.cart = this.cart.filter(item => item.imdbID !== movie.imdbID);
            this.addedItems.delete(movie.imdbID);
            this.saveCart();
        },
        toggleCart() {
            this.showCart = !this.showCart;
        },
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        }
    }
};
</script>

<template>
    <div>
        <Header @search="handleSearch" @toggle-cart="toggleCart" :cartCount="cart.length" :showCart="showCart" />
        <div v-if="showCart">
            <Cart :cartItems="cart" @remove="removeFromCart" />
        </div>
        <div v-else>
            <ul class="lg:grid flex flex-col grid-cols-5 gap-4 m-4">
                <li v-for="item in items" :key="item.imdbID" class="relative group">
                    <div class="relative">
                        <img :src="item.Poster" :alt="item.Title"
                            class="rounded-2xl cursor-pointer h-[400px] w-[100%] object-cover" />
                        <button
                            class="p-2 absolute left-0 bg-blue-500 w-full bottom-0 text-white rounded-b-2xl transition-opacity duration-300"
                            :class="{ 'bg-red-500 cursor-not-allowed': addedItems.has(item.imdbID) }"
                            :disabled="addedItems.has(item.imdbID)" @click="addToCart(item)">
                            {{ addedItems.has(item.imdbID) ? 'Added' : 'Add To Cart' }}
                        </button>
                    </div>
                    <div class="my-2">
                        <h3>Title: {{ item.Title }}</h3>
                        <p>Release Date: {{ item.Year }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
