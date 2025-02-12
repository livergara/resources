<script lang="ts">
import { defineComponent } from 'vue';
import ResourceService from '@/services/ResourceService';
import DataTable from '@/components/DataTable/DataTable.vue';

interface TableData {
    id: number;
    fio: string;
    email: string;
    position: string;
    role: string;
    busyness: string;
    projects: string[];
}

export default defineComponent({
    components: {
        DataTable,
    },
    data() {
        return {
            title: 'Матрица компетенций',
            resources: null as null | { id: number; userFio: string; role: string; grade: string; busyProcent: number; }[],
            showDotMenu: false
        }
    },
    methods: {
        // @ts-ignore
        navigateTo(route) {
            this.$router.push(route)
        },
        showDotsMenu() {
            this.showDotMenu = !this.showDotMenu;
        }
    },
    async mounted() {
        // backend request
        this.resources = (await ResourceService.index()).data
    }
})
</script>

<template>
    <main>
        <div class="page-title__block">
            <h1>{{ title }}</h1>
            <router-link :to="{ name: 'resource-registry-create' }">
                <button class="button-default">Добавить ресурс</button>
            </router-link>
        </div>
        <div class="page-main__component">
            <table>
                <thead>
                    <tr>
                        <th> </th>
                        <th>ФИО</th>
                        <th>Роль</th>
                        <th>Грейд</th>
                        <th>Занятость</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="resource in resources" :key="resource.id">
                        <td>
                            <button class="button-view" @click="navigateTo({
                                name: 'resource-view',
                                params: {
                                    resourceId: resource.id
                                }
                            })"><img src="../../assets/icons/viewing.svg" alt="">
                            </button>
                        </td>
                        <td> {{ resource.userFio }}</td>
                        <td> {{ resource.role }}</td>
                        <td> {{ resource.grade }}</td>
                        <td> {{ resource.busyProcent }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.page-title__block{
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}
</style>