<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export interface RowData {
    [key: string] : string | number | boolean;
}

export default defineComponent({
    name: 'DataTable',
    props: {
        headers: {
            type: Array as () => string[],
            required: true,
        },
        data: {
            type: Array as () => RowData[],
            required: true,
        },
        rowsPerPage: {
            type: Number,
            default: 10,
        }
    },
    setup(props) {
        const currentPage = ref(1);

        const totalPages = computed(() => Math.ceil(props.data.length / props.rowsPerPage));

        const paginatedData = computed(() => {
            const start = (currentPage.value - 1) * props.rowsPerPage;
            const end = start + props.rowsPerPage;
            return props.data.slice(start, end);
        });

        const nextPage = () => {
            if (currentPage.value < totalPages.value) {
                currentPage.value++;
            }
        };

        const previousPage = () => {
            if (currentPage.value > 1) {
                currentPage.value--;
            }
        };

        return {
            currentPage,
            totalPages,
            paginatedData,
            nextPage,
            previousPage,
        };
    }

})

</script>

<template>
<div class="datatable__component">
    <table>
        <thead>
            <tr>
                <th v-for="(tableheader, thead) in headers" :key="thead">{{ tableheader }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(tablerow, rowIndex) in paginatedData" :key="rowIndex">
                <td v-for="(value, colIndex) in tablerow" :key="colIndex">{{ value }}</td>
            </tr>
        </tbody>
    </table>

    <div class="pagination-controls">
        <button @click="previousPage" :disabled="currentPage === 1">Назад</button>
        <span>Страница {{ currentPage }} из {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Вперед</button>
    </div>
</div>
</template>

<style lang="scss" scoped>
@use './ui/ResourceRegistry.scss'
</style>