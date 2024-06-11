<script>
export default {
    props: {
        cartItems: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            showModel: false,
            selectedSpan: null,
            selectedItem: null
        };
    },
    methods: {
        removeItem(item) {
            this.$emit('remove', item);
        },

        openModel(item) {
            this.selectedItem = item;
            this.showModel = true;
        },

        closeModel() {
            this.showModel = false;
        },

        selectSpan(num) {
            this.selectedSpan = num;
            this.addCart();
        },

        openSelectbox() {
            this.selectBox = !this.selectBox;
        },

        navigateToSelectSit() {
            if (this.selectedItem) {
                console.log('Navigating to selectSit with item:', this.selectedItem);
                localStorage.setItem('movieTitle', this.selectedItem.Title);
                this.$router.push({ name: 'selectSit' });
            } else {
                console.error('No item selected for navigation');
            }
        },

        addCart() {
            localStorage.setItem('num', JSON.stringify(this.selectedSpan));
        }
    }
};
</script>

<template>
    <div class="cart-page lg:p-[20px]">
        <ul class="lg:grid flex flex-col grid-cols-5 gap-4 p-2 lg:p-0 lg:m-4 container">
            <li class="relative group" v-for="item in cartItems" :key="item.imdbID">
                <div class="relative">
                    <img :src="item.Poster" :alt="item.Title"
                        class="rounded-2xl cursor-pointer h-[400px] w-[100%] object-cover" />
                    <button
                        class="absolute right-[5px] top-[5px] bg-red-500 w-[25px] h-[25px] text-white rounded-full lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"
                        @click="removeItem(item)">X</button>
                    <button
                        class="p-2 rounded-b-2xl absolute left-0 bottom-0 bg-blue-500 w-full text-white lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"
                        @click="openModel(item)">
                        Book My Ticket</button>
                </div>
                <div class="my-2">
                    <h3>Title: {{ item.Title }}</h3>
                    <p>Release Date: {{ item.Year }}</p>
                </div>
            </li>
        </ul>
        <div v-if="showModel" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div
                class="bg-white rounded-lg relative w-full mx-2 lg:mx-0 lg:w-[50%] h-[50%] flex flex-col items-center justify-center">
                <div class="lg:p-8 flex lg:gap-8">
                    <span v-for="(num, index) in 10" :key="index" @click="selectSpan(num)" :class="{
                'bg-blue-500 text-white': selectedSpan === num,
                'hover:bg-blue-500 hover:text-white': selectedSpan !== num
            }" class="cursor-pointer w-[20px] h-[20px] flex items-center justify-center rounded-full p-4">
                        {{ num }}
                    </span>
                </div>
                <button @click="closeModel"
                    class="absolute top-[10px] right-[10px] p-2 bg-red-600 text-white flex items-center justify-center rounded-full h-[30px] w-[30px]">X
                </button>
                <button @click="navigateToSelectSit" :disabled="selectedSpan === null" :class="['absolute bottom-[10px] rounded-md text-white p-2 lg:p-3 transition-bg duration-300',
                selectedSpan === null ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700']">
                    Select Seat
                </button>
            </div>
        </div>
    </div>
</template>
