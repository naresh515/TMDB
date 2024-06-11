<script>
import Header from "./header.vue";

export default {
    name: 'SelectSit',
    props: ['movieName'],
    components: {
        Header
    },
    data() {
        return {
            selectedSeats: [],
            totalSeats: 150,
            maxSeats: 0,
            showModelBox: false,
            movieTitle: ''
        };
    },
    created() {
        const selectedNumber = JSON.parse(localStorage.getItem('num'));
        const movieTitle = localStorage.getItem('movieTitle');

        if (selectedNumber) {
            this.maxSeats = selectedNumber;
        }

        if (movieTitle) {
            this.movieTitle = movieTitle;
        }
    },
    computed: {
        selectionLimitReached() {
            return this.selectedSeats.length >= this.maxSeats;
        },
        isConfirmButtonDisabled() {
            return this.selectedSeats.length !== this.maxSeats;
        },
        totalAmount() {
            return this.selectedSeats.reduce((total, seat) => {
                if (seat.startsWith('100')) {
                    return total + 100;
                } else if (seat.startsWith('200')) {
                    return total + 200;
                } else if (seat.startsWith('300')) {
                    return total + 300;
                }
                return total;
            }, 0);
        }
    },
    methods: {
        isSelected(seatNumber) {
            return this.selectedSeats.includes(seatNumber);
        },
        toggleSeatSelection(seatNumber) {
            if (this.isSelected(seatNumber)) {
                this.selectedSeats = this.selectedSeats.filter(seat => seat !== seatNumber);
            } else if (!this.selectionLimitReached) {
                this.selectedSeats.push(seatNumber);
            }
        },
        openModelBox() {
            this.showModelBox = !this.showModelBox;
        }
    }
};

</script>

<template>
    <Header />
    <div class="flex lg:flex-row flex-col items-center my-3 justify-around px-2">
        <div class="w-full">
            <h5 class="text-sm border-b-[1px] text-gray-500 border-gray-300">100 BOTTOM</h5>
            <div class="flex flex-col gap-4 my-[10px]">
                <div class="flex gap-2">
                    <button>A</button>
                    <button v-for="seat in 10" :key="'100A' + seat"
                        :class="['border lg:border-2 p-1 text-sm transition-all duration-300',
                        isSelected('100A' + seat) ? 'bg-green-500 text-white' :
                            (selectionLimitReached && !isSelected('100A' + seat)) ? 'border-green-500 text-green-500 cursor-not-allowed' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white']"
                        @click="toggleSeatSelection('100A' + seat)"
                        :disabled="selectionLimitReached && !isSelected('100A' + seat)">
                        {{ seat < 10 ? '0' + seat : seat }} </button>
                </div>
                <div class="flex gap-2">
                    <button>B</button>
                    <button v-for="seat in 10" :key="'100B' + (seat + 10)"
                        :class="['border lg:border-2 p-1 text-sm transition-all duration-300',
                        isSelected('100B' + seat) ? 'bg-green-500 text-white' :
                            (selectionLimitReached && !isSelected('100B' + seat)) ? 'border-green-500 text-green-500 cursor-not-allowed' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white']"
                        @click="toggleSeatSelection('100B' + seat)"
                        :disabled="selectionLimitReached && !isSelected('100B' + seat)">
                        {{ seat + 10 }} </button>
                </div>
                <div class="flex gap-2">
                    <button>C</button>
                    <button v-for="seat in 10" :key="'100C' + seat"
                        :class="['border lg:border-2 p-1 text-sm transition-all duration-300',
                        isSelected('100C' + seat) ? 'bg-green-500 text-white' :
                            (selectionLimitReached && !isSelected('100C' + seat)) ? 'border-green-500 text-green-500 cursor-not-allowed' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white']"
                        @click="toggleSeatSelection('100C' + seat)"
                        :disabled="selectionLimitReached && !isSelected('100C' + seat)">
                        {{ seat + 20 }} </button>
                </div>
                <div class="flex gap-2">
                    <button>D</button>
                    <button v-for="seat in 10" :key="'100D' + seat"
                        :class="['border lg:border-2 p-1 text-sm transition-all duration-300',
                        isSelected('100D' + seat) ? 'bg-green-500 text-white' :
                            (selectionLimitReached && !isSelected('100D' + seat)) ? 'border-green-500 text-green-500 cursor-not-allowed' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white']"
                        @click="toggleSeatSelection('100D' + seat)"
                        :disabled="selectionLimitReached && !isSelected('100D' + seat)">
                        {{ seat + 30 }} </button>
                </div>
                <div class="flex gap-2">
                    <button>E</button>
                    <button v-for="seat in 10" :key="'100E' + seat"
                        :class="['border lg:border-2 p-1 text-sm transition-all duration-300',
                        isSelected('100E' + seat) ? 'bg-green-500 text-white' :
                            (selectionLimitReached && !isSelected('100E' + seat)) ? 'border-green-500 text-green-500 cursor-not-allowed' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white']"
                        @click="toggleSeatSelection('100E' + seat)"
                        :disabled="selectionLimitReached && !isSelected('100E' + seat)">
                        {{ seat + 40 }} </button>
                </div>
            </div>
        </div>
        <div class="w-full">
            <h5 class="text-sm border-b-[1px] text-gray-500 border-gray-300">200 MIDDLE</h5>
            <div class="flex flex-col gap-4 my-[10px]">
                <div class="flex gap-2">
                    <button>A</button>
                    <button v-for="seat in 10" :key="'200A' + seat"
                        :class="['border lg:border-2 p-1 text-sm transition-all duration-300',
                        isSelected('200A' + seat) ? 'bg-green-500 text-white' :
                            (selectionLimitReached && !isSelected('200A' + seat)) ? 'border-green-500 text-green-500 cursor-not-allowed' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white']"
                        @click="toggleSeatSelection('200A' + seat)"
                        :disabled="selectionLimitReached && !isSelected('200A' + seat)">
                        {{ seat < 10 ? '0' + seat : seat }} </button>
                </div>
                <div class="flex gap-2">
                    <button>B</button>
                    <button v-for="seat in 10" :key="'200B' + seat"
                        :class="['border lg:border-2 p-1 text-sm transition-all duration-300',
                        isSelected('200B' + seat) ? 'bg-green-500 text-white' :
                            (selectionLimitReached && !isSelected('200B' + seat)) ? 'border-green-500 text-green-500 cursor-not-allowed' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white']"
                        @click="toggleSeatSelection('200B' + seat)"
                        :disabled="selectionLimitReached && !isSelected('200B' + seat)">
                        {{ seat + 10 }} </button>
                </div>
                <div class="flex gap-2">
                    <button>C</button>
                    <button v-for="seat in 10" :key="'200C' + seat"
                        :class="['border lg:border-2 p-1 text-sm transition-all duration-300',
                        isSelected('200C' + seat) ? 'bg-green-500 text-white' :
                            (selectionLimitReached && !isSelected('200C' + seat)) ? 'border-green-500 text-green-500 cursor-not-allowed' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white']"
                        @click="toggleSeatSelection('200C' + seat)"
                        :disabled="selectionLimitReached && !isSelected('200C' + seat)">
                        {{ seat + 20 }} </button>
                </div>
                <div class="flex gap-2">
                    <button>D</button>
                    <button v-for="seat in 10" :key="'200D' + seat"
                        :class="['border lg:border-2 p-1 text-sm transition-all duration-300',
                        isSelected('200D' + seat) ? 'bg-green-500 text-white' :
                            (selectionLimitReached && !isSelected('200D' + seat)) ? 'border-green-500 text-green-500 cursor-not-allowed' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white']"
                        @click="toggleSeatSelection('200D' + seat)"
                        :disabled="selectionLimitReached && !isSelected('200D' + seat)">
                        {{ seat + 30 }} </button>
                </div>
                <div class="flex gap-2">
                    <button>E</button>
                    <button v-for="seat in 10" :key="'200E' + seat"
                        :class="['border lg:border-2 p-1 text-sm transition-all duration-300',
                        isSelected('200E' + seat) ? 'bg-green-500 text-white' :
                            (selectionLimitReached && !isSelected('200E' + seat)) ? 'border-green-500 text-green-500 cursor-not-allowed' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white']"
                        @click="toggleSeatSelection('200E' + seat)"
                        :disabled="selectionLimitReached && !isSelected('200E' + seat)">
                        {{ seat + 40 }} </button>
                </div>
            </div>
        </div>
        <div class="w-full">
            <h5 class="text-sm border-b-[1px] text-gray-500 border-gray-300">300 UPPER</h5>
            <div class="flex flex-col gap-4 my-[10px]">
                <div class="flex gap-2">
                    <button>A</button>
                    <button v-for="seat in 10" :key="'300A' + seat"
                        :class="['border lg:border-2 p-1 text-sm transition-all duration-300',
                        isSelected('300A' + seat) ? 'bg-green-500 text-white' :
                            (selectionLimitReached && !isSelected('300A' + seat)) ? 'border-green-500 text-green-500 cursor-not-allowed' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white']"
                        @click="toggleSeatSelection('300A' + seat)"
                        :disabled="selectionLimitReached && !isSelected('300A' + seat)">
                        {{ seat < 10 ? '0' + seat : seat }} </button>
                </div>
                <div class="flex gap-2">
                    <button>B</button>
                    <button v-for="seat in 10" :key="'300B' + seat"
                        :class="['border lg:border-2 p-1 text-sm transition-all duration-300',
                        isSelected('300B' + seat) ? 'bg-green-500 text-white' :
                            (selectionLimitReached && !isSelected('300B' + seat)) ? 'border-green-500 text-green-500 cursor-not-allowed' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white']"
                        @click="toggleSeatSelection('300B' + seat)"
                        :disabled="selectionLimitReached && !isSelected('300B' + seat)">
                        {{ seat + 10 }} </button>
                </div>
                <div class="flex gap-2">
                    <button>C</button>
                    <button v-for="seat in 10" :key="'300C' + seat"
                        :class="['border lg:border-2 p-1 text-sm transition-all duration-300',
                        isSelected('300C' + seat) ? 'bg-green-500 text-white' :
                            (selectionLimitReached && !isSelected('300C' + seat)) ? 'border-green-500 text-green-500 cursor-not-allowed' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white']"
                        @click="toggleSeatSelection('300C' + seat)"
                        :disabled="selectionLimitReached && !isSelected('300C' + seat)">
                        {{ seat + 20 }} </button>
                </div>
                <div class="flex gap-2">
                    <button>D</button>
                    <button v-for="seat in 10" :key="'300D' + seat"
                        :class="['border lg:border-2 p-1 text-sm transition-all duration-300',
                        isSelected('300D' + seat) ? 'bg-green-500 text-white' :
                            (selectionLimitReached && !isSelected('300D' + seat)) ? 'border-green-500 text-green-500 cursor-not-allowed' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white']"
                        @click="toggleSeatSelection('300D' + seat)"
                        :disabled="selectionLimitReached && !isSelected('300D' + seat)">
                        {{ seat + 30 }} </button>
                </div>
                <div class="flex gap-2">
                    <button>E</button>
                    <button v-for="seat in 10" :key="'300E' + seat"
                        :class="['border lg:border-2 p-1 text-sm transition-all duration-300',
                        isSelected('300E' + seat) ? 'bg-green-500 text-white' :
                            (selectionLimitReached && !isSelected('300E' + seat)) ? 'border-green-500 text-green-500 cursor-not-allowed' : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white']"
                        @click="toggleSeatSelection('300E' + seat)"
                        :disabled="selectionLimitReached && !isSelected('300E' + seat)">
                        {{ seat + 40 }} </button>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-8 flex items-center justify-center">
        <button class="bg-blue-500 p-2 rounded-md text-white font-bold hover:bg-blue-700 delay-100 transition-all"
            @click="openModelBox()"
            :class="{ 'cursor-not-allowed bg-red-500 hover:bg-red-500': isConfirmButtonDisabled }"
            :disabled="isConfirmButtonDisabled">Confirm
            Seat</button>
    </div>

    <div v-if="showModelBox" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div
            class="bg-white rounded-lg relative w-full mx-2 lg:mx-0 lg:w-[50%] h-[50%] flex flex-col items-center justify-center">
            <h1 class="font-bold text-[15px] lg:text-[20px]">Thank you for Confirming Your {{ maxSeats }} Seat for
                <br /> Title : {{ movieTitle
                }}
                <br /> Total Amout : {{ totalAmount }}
            </h1>
            <button @click="openModelBox"
                class="absolute top-[10px] right-[10px] p-2 bg-red-600 text-white flex items-center justify-center rounded-full h-[30px] w-[30px]">X
            </button>
            <router-link to="/">
                <button @click="openModelBox"
                    class="absolute bottom-[10px] py-2 px-3 bg-red-600 text-white flex items-center justify-center rounded-md">
                    Close
                </button>
            </router-link>
        </div>
    </div>
</template>
