<script lang="ts">
import DataTable from '@/components/DataTable/DataTable.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        DataTable,
    },
    data() {
        return {
            tableHeaders: ['', 'ФИО', 'Почта', 'Должность', 'Роль', '% занятости', 'Проекты'],
            tableData: [
                { Settings: '__', FIO: 'Константинопольский Константин Кириллович', Email: 'KonKirKonstantinopolsky@mailatom.ru', Position: 'Middle', Role: 'Разработчик Vue JS', Busyness: 100, Projects: 'Портал ГА (редизайн)' },
                { Settings: '__', FIO: 'Лавриченко Руслана Николаевна', Email: 'RuNikLavrichenko@mailatom.ru', Position: 'Middle', Role: 'Bitrix разработчик', Busyness: 100, Projects: 'Атом ВКС' },
                { Settings: '__', FIO: 'Демидов Матвей Павлович', Email: 'MPaDemidov@mailatom.ru', Position: 'Senior', Role: 'Верстальщик', Busyness: 100, Projects: 'ТВЭЛ, ЭХЗ, Центротех' },
                { Settings: '__', FIO: 'Соболев Михаил Викторович', Email: 'MVSobolev@mailatom.ru', Position: 'Junior', Role: 'Разработчик Vue JS', Busyness: 50, Projects: 'Портал ГК' },
                { Settings: '__', FIO: 'Старостина София Михайловна', Email: 'SMStarostina@mailatom.ru', Position: 'Senior', Role: 'Разработчик .net', Busyness: 100, Projects: 'Портал ГА (редизайн), Тираж кольца ТВЭЛ',  },
                { Settings: '__', FIO: 'Шмелев Игорь Викторович', Email: 'IVShmelev@mailatom.ru', Position: 'Middle', Role: 'Разработчик SharePoint', Busyness: 100, Projects: 'ЕИС КМС, ПУИ, Страна Росатом' },
                { Settings: '__', FIO: 'Латышев Ярослав Кириллович', Email: 'YarKLatyshev@mailatom.ru', Position: 'Middle', Role: 'Bitrix разработчик', Busyness: 100, Projects: 'Портал ГК, Сервис Полиграфии' },
                { Settings: '__', FIO: 'Кузьмин Арсен Кириллович', Email: 'ArKiKuzmin@mailatom.ru', Position: 'Senior', Role: 'Разработчик Vue JS', Busyness: 100, Projects: 'Геймификация, ЕИС КМС' },
                { Settings: '__', FIO: 'Кондратьева Вера Мироновна', Email: 'VMKondrateva@mailatom.ru', Position: 'Senior', Role: 'Дизайнер', Busyness: 100, Projects: 'Портал ГА (редизайн)' },
                { Settings: '__', FIO: 'Попов Олег Никитич', Email: 'OMPopov@mailatom.ru', Position: 'Junior', Role: 'Bitrix разработчик', Busyness: 100, Projects: 'БКУ' },
                { Settings: '__', FIO: 'Кузин Георгий Михайлович', Email: 'GeoMKuzin@mailatom.ru', Position: 'Senior', Role: 'Разработчик Vue JS', Busyness: 100, Projects: 'Геймификация, Астра, АтомФорма, Сервис заказа пропусков' },
                { Settings: '__', FIO: 'Орлов Тимофей Степанович', Email: 'TSOrlov@mailatom.ru', Position: 'Middle', Role: 'Разработчик SharePoint', Busyness: 50, Projects: 'Портал ГА (редизайн)' },
                { Settings: '__', FIO: 'Макаров Ярослав Александрович', Email: 'YAlMakarov@mailatom.ru', Position: 'Middle', Role: 'Разработчик Vue JS', Busyness: 100, Projects: 'Страна Росатом' },
            ]
        }
    }
})
</script>

<template>
    <div class="resouceregistry__page">
        <h1>Матрица компетенций</h1>
        <DataTable
        :data="tableData"
        :headers="tableHeaders"
        :rowsPerPage="10"
        />
    </div>
</template>

<style lang="scss" scoped>
.resouceregistry__page {
    border: 1px solid black;
    border-radius: 40px;

    h1{
        padding: 30px;
    }
}
</style>