<script lang="ts">
import DataTable from '@/components/DataTable/DataTable.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        DataTable
    },
    data() {
        return {
            tableHeaders: ['', 'Название проекта', 'Код проекта', 'Краткое описание', 'Менеджер проекта', 'Контакты менеджера проекта'],
            tableData: [
                { Settings: '   ', ProjectName: 'Портал ГА', ProjectCode: '56856756', Description: 'Краткое описание как замена Lorem Ispum в качестве бессмысленного текста', Manager: 'Константинопольский Константин Кириллович', ManagerContacts: 'KonKirKonstantinopolsky@mailatom.ru' },
                { Settings: '   ', ProjectName: 'Портал ГК', ProjectCode: '56856756', Description: 'Краткое описание как замена Lorem Ispum в качестве бессмысленного текста', Manager: 'Константинопольский Константин Кириллович', ManagerContacts: 'KonKirKonstantinopolsky@mailatom.ru' },
                { Settings: '   ', ProjectName: 'ТВЭЛ', ProjectCode: '56856756', Description: 'Длинное описание как замена Lorem Ispum в качестве бессмысленного текста. Длинное описание как замена Lorem Ispum в качестве бессмысленного текста, но это не точно. Длинное описание как замена Lorem Ispum в качестве бессмысленного текста', Manager: 'Константинопольский Константин Кириллович', ManagerContacts: 'KonKirKonstantinopolsky@mailatom.ru' },
                { Settings: '   ', ProjectName: 'Больше ТВЭЛа', ProjectCode: '56856756', Description: 'Краткое описание как замена Lorem Ispum в качестве бессмысленного текста', Manager: 'Константинопольский Константин Кириллович', ManagerContacts: 'KonKirKonstantinopolsky@mailatom.ru' },
                { Settings: '   ', ProjectName: 'Еще больше ТВЭЛа', ProjectCode: '56856756', Description: 'Краткое описание как замена Lorem Ispum в качестве бессмысленного текста', Manager: 'Константинопольский Константин Кириллович', ManagerContacts: 'KonKirKonstantinopolsky@mailatom.ru' },
                { Settings: '   ', ProjectName: 'Портал ГА', ProjectCode: '56856756', Description: 'Краткое описание как замена Lorem Ispum в качестве бессмысленного текста', Manager: 'Константинопольский Константин Кириллович', ManagerContacts: 'KonKirKonstantinopolsky@mailatom.ru' },
            ]
        }
    }

})
</script>

<template>
    <div class="main-container">
        <h1>Реестр проектов</h1>
        <DataTable
        :data="tableData"
        :headers="tableHeaders"
        :rowsPerPage="10"
        />
    </div>
</template>

<style lang="scss" scoped>

</style>