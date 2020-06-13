<template>
    <div class="container">
        <div class="product-box">
            <div class="wrapper">
                <!-- banner 省略 -->
                <!-- <div class="list-box">
                    <div class="list" v-for="(arr, i) in itemsList" :key="i">
                        <div class="item" v-for="(item, j) in arr" :key="j">
                            <span :class="{'new-pro':j%2==0}">新品</span>
                            <div class="item-img">
                                <img :src="item.mainImage" alt="">
                            </div>
                            <div class="item-info">
                                <h3>{{item.name}}</h3>
                                <p>{{item.subtitle}}</p>
                                <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="list-box">
                    <div class="list" v-for="(arr,i) in itemsList" v-bind:key="i">
                        <div class="item" v-for="(item,j) in arr" v-bind:key="j">
                            <span v-bind:class="{'new-pro':j%2==0}">新品</span>
                            <div class="item-img">
                                <img v-bind:src="item.mainImage" alt="">
                            </div>
                            <div class="item-info">
                                <h3>{{item.name}}</h3>
                                <p>{{item.subtitle}}</p>
                                <p class="price">{{item.price}}元</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <modal 
            title="提示" 
            sureText="查看购物车" 
            btnType="1" 
            modalType="middle" 
            v-bind:showModal="showModal"
            v-on:submit="goToCart"
            v-on:cancel="showModal=false"
        >
            <template v-slot:body>
                <p>商品添加成功</p>
            </template>
        </modal>
    </div>
</template>

<script>
    import Modal from './../components/Modal';
    import ServiceBar from './../components/ServiceBar'
    export default {
        components: {
            ServiceBar,
            Modal
        },
        name: 'all',
        data(){
            return {
                // itemsList:[[1, 1, 1, 1, 1,], [1, 1, 1, 1, 1, ]]
                // itemsList:[[1, 1, 1, 1,], [1, 1, 1, 1, ]]
                itemsList: []
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.axios.get('/products', {
                    params: {
                        categoryId: 100012,
                        pageSize: 14
                    }
                }).than((res)=>{
                    res.list = res.list.slice(6, 14);
                    this.itemsList = [res.list.slice(0, 4), res.list.slice(4, 8)];
                    // for( let i = 0; i < res.list.length; i = i + 4 ) {
                    //     for ( let j = 4; j < res.list.length; j += 4 ) {
                    //         this.itemsList.push([res.list.slice(i, j)]);
                    //     }
                    // }
                })
                
            },
            addCart() {
                this.showModel = true;
            },
            goToCart() {
                this.$router.push('cart')
            }
        }
    }
    
</script>

<style lang="scss">
    @import './../assets/scss/base.scss';
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .container {
        .product-box {
        background-color: $colorJ;
        padding: 30px 0 50px;
        .wrapper {
            margin: 0 8px;
            // margin-right: 5px;
            // margin-left: 5px;
            display: flex;
            .list-box {
                .list {
                    @include flex();
                    // width: 986px;
                    width: 1210px;
                    margin-bottom: 14px;
                    // 想让两个盒子隔14px，最左边右边贴边
                    &:last-child {
                        margin-bottom: 0;
                    }
                    .item {
                        width: 270px;
                        height: 310px;
                        background-color: $colorG;
                        text-align: center;
                        span {
                            display: inline-block;
                            width: 67px;
                            height: 24px;
                            font-size: 14px;
                            line-height: 24px;
                            color: $colorG;
                            &.new-pro {
                                background-color: #7cef68;
                            }
                            &.kill-pro {
                                background-color: #e82626;
                            }
                        }
                        .item-img {
                            img {
                                height: 215px;
                                width: 100%;
                            }
                        }
                        .item-info {
                            h3 {
                                font-size: $fontJ;
                                color: $colorB;
                                font-weight: bold;
                                line-height: $fontJ;
                            }
                            p{
                                color: #fff;
                                line-height: 13px;
                                margin: 6px auto 13px;
                            }
                            .price {
                                color: #F20A0A;
                                font-size: $fontJ;
                                font-weight: bold;
                                cursor: pointer;
                                &:after {
                                    @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                                    content: ' ';
                                    margin-left: 5px;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    }
    
</style>