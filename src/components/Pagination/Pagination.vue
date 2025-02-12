<script lang="ts">
import { defineComponent, ref, watch } from 'vue';


export default defineComponent({
    name: 'Pagination',
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        totalItems: {
            type: Number,
            required: true,
        },
        itemsPerPage: {
            type: Number,
            required: true,
        }
    },
    emits: ['update:currentPage', 'update:itemsPerPage'],
    computed: {
        totalPages(): number {
            return Math.ceil(this.totalItems / this.itemsPerPage);
        }
    },
    methods: {
        goToPage(page: number) {
            if (page >= 1 && page <= this.totalPages) {
                this.$emit('update:currentPage', page)
            }
            
        },
        updateItemsPerPage(event: Event) {
            const select = event.target as HTMLSelectElement;
            this.$emit('update:itemsPerPage', Number(select.value));
        }
    }
})
</script>

<template>
    <div class="pagination__component">
        <button 
        :disabled="currentPage <= 1" 
        @click="goToPage(currentPage - 1)" 
        class="pagination-button">
            <img src="../../assets/icons/arrow-left.svg" alt="">
        </button>
        <span>Страница {{ currentPage }} из {{ totalPages }}</span>
        <button 
        :disabled="currentPage >= totalPages" 
        @click="goToPage(currentPage + 1)" 
        class="pagination-button">
            <img src="../../assets/icons/arrow-right.svg" alt="">
        </button>

        <div class="">
            <label for="itemsPerPage">Объектов на странице:</label>
            <select 
            id="itemsPerPage" 
            v-model="itemsPerPage" 
            @change="updateItemsPerPage">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            </select>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>