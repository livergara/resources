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
            <img src="../assets/icons/logo.svg" alt="">
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
                <button>
                    <router-link to="/manual"><img src="../assets/icons/manual.svg" alt=""></router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    align-items: center;
    border-bottom: 1px solid rgba(0, 15, 116, 0.25);
    display: flex;
    justify-content: space-between;
    padding: 35px;

    .header__logo {
        align-items: center;
        display: flex;

        img{
            width: 43px;
        }

        h3 {
            color: #003274;
            font-size: 16px;
            font-weight: bold;
            margin: 0;
            padding-left: 10px;
        }
    }

    .header__menu {
        align-items: center;
        display: flex;
    }

    .header__tools {
        align-items: center;
        display: flex;
        gap: 20px;

        .header__tools_notifications button {
            background: none;
            border: none;
            border-radius: 50px;
            padding: 0px;

            img {
                cursor: pointer;
                padding: 7px 9px;

                &:hover {
                    transform: rotate(325deg);
                }
            }
        }

        .header__tools_manual button {
            background: none;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-family: 'Times New Roman', Times, serif;
            font-size: 16px;
            padding: 7px 9px;

            a {
                color: #003274;
                text-decoration: none;
            }
        }


    }
}
</style>