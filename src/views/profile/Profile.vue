<template>
    <div id="profile">
        <nav-top class="my-nav">
            <div slot="conter">权某购物</div>
        </nav-top>
        <login-registered></login-registered>
        <div class="account-item">
            <div class="balance-info">
                <div class="balance-number"><span>0.00</span> 元</div>
                <div class="balance">我的余额</div>
            </div>
            <div class="balance-info">
                <div class="balance-number"><span>0</span> 个</div>
                <div class="balance">我的优惠</div>
            </div>
            <div class="balance-info">
                <div class="balance-number"><span>0</span> 分</div>
                <div class="balance">我的积分</div>
            </div>
        </div>
        <use-view :use-info="title1"></use-view>
        <use-view :use-info="title2"></use-view>
    </div>
</template>

<script>
import NavTop from "../../components/common/navbar/NavTop.vue";
import LoginRegistered from "./childcomps/LoginRegistered.vue";
import UseView from "./childcomps/UseView.vue";

export default {
    components: { NavTop, LoginRegistered, UseView },
    data() {
        return {
            title1: [
                {
                    text: "我的消息",
                    img: require("../../assets/img/profile/mymessage.svg")
                },
                {
                    text: "积分商城",
                    img: require("../../assets/img/profile/shopping.svg")
                },
                {
                    text: "会员卡",
                    img: require("../../assets/img/profile/vip.svg")
                }
            ],
            title2: [
                {
                    text: "我的购物车",
                    img: require("../../assets/img/profile/cart.svg")
                },
                {
                    text: "下载购物APP",
                    img: require("../../assets/img/profile/app.svg")
                }
            ]
        };
    }
};
</script>

<style scoped>
#profile {
    background-color: #f2f2f2;
}
.my-nav {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
    /* background-color: red; */
}
.account-item {
    display: flex;
    font-size: 13px;
    background-color: #fff;
}
.balance-info {
    margin-right: 1px;
    flex: 1;
    padding: 18px;
    text-align: center;
    border-right: 1px solid #eee;
}
.account-item .balance-info:nth-child(3) {
    border-right: none;
    margin-right: 0;
}
.balance {
    font-size: 13px;
    margin-top: 6px;
}
.balance-number span {
    font-size: 24px;
    color: #ff5e3d;
    font-weight: 700;
}
</style>
