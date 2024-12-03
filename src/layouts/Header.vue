<script lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        HeaderMenu
    }
})
</script>

<template>
    <div class="header">
        <div class="header__logo">
            <h3>Управление загрузкой ресурсов</h3>
        </div>
        <div class="header__menu">
            <header-menu></header-menu>
        </div>
        <div class="header__tools">
            <div class="header__tools_notifications">
                <button>
                    <img src="../assets/icons/notifications.svg" alt="">
                </button>
            </div>
            <div class="header__tools_manual">
                <button>Справочник</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;

    .header__logo h3 {
        background-color: black;
        border-radius: 50px;
        color: white;
        font-size: 16px;
        font-weight: normal;
        margin: 0;
        padding: 15px 32px;
    }

    .header__menu{
        align-items: center;
        border: 1px solid black;
        border-radius: 50px;
        display: flex;
    }

    .header__tools {
        display: flex;
        gap: 20px;

        .header__tools_notifications button {
            background: none;
            border: 1px solid black;
            border-radius: 50px;
            padding: 0px;

            img {
                cursor: pointer;
                padding: 9px 11px;

                &:hover {
                    transform: rotate(325deg);
                }
            }
        }

        .header__tools_manual button{
            background: none;
            border: 1px solid black;
            border-radius: 50px;
            cursor: pointer;
            font-size: 16px;
            padding: 14px 32px;
        }


    }
}
</style>